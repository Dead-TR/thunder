import { Scene, Textures } from "phaser";

export const imgLoader = async (
  scene: Scene,
  img: {
    id: string;
    link: string;
  }
) =>
  new Promise<{
    id: string;
    texture: Textures.Texture;
  }>((resolve, reject) => {
    let loadedImg: {
      id: string;
      texture: Textures.Texture;
    } | null = null;

    scene.load.image(img.id, img.link);

    scene.load.on(
      Phaser.Loader.Events.FILE_COMPLETE,
      (id: string, type: string, texture: Textures.Texture) => {
        loadedImg = {
          id,
          texture,
        };
        console.log("🚀 ~ file: loader.ts ~ line 28 ~ texture", texture);

        resolve(loadedImg);
      }
    );

    scene.load.on(Phaser.Loader.Events.COMPLETE, () => {
      if (!loadedImg) {
        reject(
          `error when try load ${img.id}. Please check path (${img.link}) is correct`
        );
      }
    });

    scene.load.start();
  });
