import { projects, getProjectBySlug } from '$lib/data/projects';

export function load({ params }) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        return {
            status: 404,
            error: new Error('Proyecto no encontrado')
        };
    }

    return {
        project
    };
}

export const prerender = true;

