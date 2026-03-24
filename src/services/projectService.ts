import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

/**
 * JSON dosyasından projeleri fetch eder.
 * HTTP hatasında ve ağ hatasında exception fırlatır.
 */
export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_URL);

    // fetch, HTTP hatalarında (404, 500 vb.) reject OLMAZ!
    // Bu yüzden response.ok kontrolü zorunludur.
    if (!response.ok) {
      throw new Error(
        `Projeler yüklenemedi: HTTP ${response.status}`
      );
    }

    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    throw error; // Hatayı yukarı ilet — çağıran try/catch yakalasın
  }
}
