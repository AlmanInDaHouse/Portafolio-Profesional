import { a as getProjectBySlug } from "../../../../chunks/projects.js";
function load({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      status: 404,
      error: new Error("Proyecto no encontrado")
    };
  }
  return {
    project
  };
}
export {
  load
};
