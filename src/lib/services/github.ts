const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export interface ProjectCard {
    title: string
    period: string
    category: string
    description: string
    techStack: string[]
    codeLink?: string
    liveLink?: string
}

const getHeaders = (acceptPreview: boolean = false): HeadersInit => ({
  // Previews for topics
  Accept: acceptPreview
    ? "application/vnd.github.mercy-preview+json"
    : "application/vnd.github.v3+json",
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
});

export async function getPublicRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: getHeaders(),
  });

  if (!res.ok) throw new Error("Failed to fetch repos");

  return res.json();
}

export async function getRepo(owner: string, repoName: string) {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
      headers: getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${owner}/${repoName}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Failed to fetch repo ${repoName}:`, error);
    return null;
  }
}

export async function getRepoTopics(
  owner: string,
  repoName: string
): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/topics`,
      {
        headers: getHeaders(true),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch topics for repo ${repoName}`);
    }

    const topicsData = await response.json();
    return topicsData.names || [];
  } catch (error) {
    console.error(`Error fetching topics for ${repoName}:`, error);
    return [];
  }
}

export interface RepoInfo {
  owner: string;
  repoName: string;
  category: string
}

export async function GetProjectsFromGitHub(
  repos: RepoInfo[],
): Promise<ProjectCard[]> {
  const projects: ProjectCard[] = [];

  for (const { owner, repoName, category } of repos) {
    try {
      const [repo, topics] = await Promise.all([
        getRepo(owner, repoName),
        getRepoTopics(owner, repoName)
      ]);

      projects.push({
        title: repo.name,
        period: `${new Date(repo.created_at).toLocaleDateString()} - ${new Date(repo.updated_at).toLocaleDateString()}`,
        category: category,
        description: repo.description || "Pas de description.",
        techStack: topics,
        codeLink: repo.html_url,
        liveLink: repo.homepage || undefined,
      });
    } catch (err) {
      console.error(`Erreur lors du chargement du repo ${repoName}:`, err);
    }
  }

  return projects;
}