import { publicMediaUrl } from "@/lib/publicMediaUrl";
import iiapMedia from "./iiapMediaFilenames.json";

/**
 * R2 keys: images/<filename> and videos/<filename> (same names as uploaded objects).
 */
const photoKeys = iiapMedia.images.map((name) => `images/${name}`);
const videoKeys = iiapMedia.videos.map((name) => `videos/${name}`);

/** Cover / listing image — cs-prj-0065 (IIAP road beautification) */
export const csPrj0065CoverImage = publicMediaUrl(`images/${iiapMedia.images[0]}`);

const project0065Images = photoKeys.map((key) => publicMediaUrl(key));
const project0065Videos = videoKeys.map((key) => publicMediaUrl(key));

export type ProjectGallery = {
  images: string[];
  videos: string[];
};

export const projectGalleryById: Record<string, ProjectGallery> = {
  "cs-prj-0065": {
    images: project0065Images,
    videos: project0065Videos,
  },
};

export function getProjectGallery(projectId: string): ProjectGallery | undefined {
  return projectGalleryById[projectId];
}
