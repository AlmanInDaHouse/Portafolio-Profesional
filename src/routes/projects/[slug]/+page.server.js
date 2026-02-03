import { projects } from '$lib/data/projects';

export const prerender = true;

export function entries() {
    return projects.map((project) => ({
        slug: project.slug
    }));
}
