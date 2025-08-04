import { ProjectCard } from "./services/project.service";

export async function getPublicRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error('Failed to fetch repos');
  return res.json();
}

export async function getRepo(owner: string, repoName: string) {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${owner}/${repoName}`);
    }
    return res.json();
  } catch (error) {
    console.error(`Failed to fetch repo ${repoName}:`, error);
    return null;
  }
}

async function getRepoTopics(owner: string, repoName: string): Promise<string[]> {
  console.log("--re", owner, repoName)
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}/topics`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json", // Header for topics
      },
    });
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
}


export async function GetProjectsFromGitHub(
  repos: RepoInfo[],
): Promise<ProjectCard[]> {
  const projects: ProjectCard[] = [];

  for (const { owner, repoName } of repos) {
    console.log("cherche",owner, repoName)
    try {
      const [repo, topics] = await Promise.all([
        getRepo(owner, repoName),
        getRepoTopics(owner , repoName)
      ]);

      // const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}`);
      // const data = await response.json();

      projects.push({
        title: repo.name,
        period: `${new Date(repo.created_at).toLocaleDateString()} - ${new Date(repo.updated_at).toLocaleDateString()}`,
        category: "GitHub Project",
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