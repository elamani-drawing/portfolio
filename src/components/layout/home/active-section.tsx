'use client';
import { useSearchParams } from 'next/navigation';
import { isNavItem } from "@/components/layout/home/navigation";
import { useEffect } from 'react';

export function UrlActiveSection({ setActiveSection }: { setActiveSection: (section: string) => void }) {
    const searchParams = useSearchParams();
    const sectionParam = searchParams.get('section');
    useEffect(() => {
        if (sectionParam && isNavItem(sectionParam)) {
            setActiveSection(sectionParam);
        } else {
            setActiveSection('about');
        }
    }, [sectionParam, setActiveSection]);
    return (<></>);
}
