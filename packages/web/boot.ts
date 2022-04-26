import { Editor } from "./editor";
import { safeRun } from "@silverbulletmd/common/util";
import { Space } from "@silverbulletmd/common/spaces/space";
import { HttpSpacePrimitives } from "@silverbulletmd/common/spaces/http_space_primitives";

// let localSpace = new Space(new IndexedDBSpacePrimitives("pages"), true);
// localSpace.watch();

let serverSpace = new Space(new HttpSpacePrimitives(""), true);
serverSpace.watch();

console.log("Booting...");

// // @ts-ignore
// window.syncer = async () => {
//   let lastLocalSync = +(localStorage.getItem("lastLocalSync") || "0"),
//     lastRemoteSync = +(localStorage.getItem("lastRemoteSync") || "0");
//   let syncer = new SpaceSync(
//     serverSpace,
//     localSpace,
//     lastRemoteSync,
//     lastLocalSync,
//     "_trash/"
//   );
//   await syncer.syncPages(
//     SpaceSync.primaryConflictResolver(serverSpace, localSpace)
//   );
//   localStorage.setItem("lastLocalSync", "" + syncer.secondaryLastSync);
//   localStorage.setItem("lastRemoteSync", "" + syncer.primaryLastSync);
//   console.log("Done!");
// };
let editor = new Editor(serverSpace, document.getElementById("root")!);

safeRun(async () => {
  await editor.init();
});

// @ts-ignore
window.editor = editor;

// if (!isDesktop) {
// if (localStorage.getItem("disable_sw") !== "true") {
navigator.serviceWorker
  .register(new URL("service_worker.ts", import.meta.url), { type: "module" })
  .then((r) => {
    console.log("Service worker registered...");
  });
// }

// }