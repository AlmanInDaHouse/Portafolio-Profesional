import { p as projects } from "../../../../chunks/projects.js";
const prerender = true;
function entries() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}
export {
  entries,
  prerender
};
