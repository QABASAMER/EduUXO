import {loadGLTF} from "./loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './targets.mind',
      maxTrack: 6,
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    //const raccoon = await loadGLTF('/assets/landmine.gltf');
     //raccoon.scene.scale.set(0.0055, 0.0055, 0.0055);
    //raccoon.scene.position.set(0, -0.4, 0);

    const raccoon = await loadGLTF('./grend.gltf');
    raccoon.scene.scale.set(0.006, 0.006, 0.006);
    raccoon.scene.position.set(0, -0.4, 0);

    const bear = await loadGLTF('./landmine1.gltf');
    bear.scene.scale.set(0.1, 0.1, 0.1);
    bear.scene.position.set(0, -0.4, 0);

    const object3 = await loadGLTF('./morter.gltf');
    object3.scene.scale.set(0.6, 0.6, 0.6);
    object3.scene.position.set(0, -0.4, 0);

    const object4 = await loadGLTF('./ob1.gltf');
    object4.scene.scale.set(0.004, 0.004, 0.004);
    object4.scene.position.set(0, -0.4, 0);

    const object5 = await loadGLTF('./grend.gltf');
    object5.scene.scale.set(0.001, 0.001, 0.001);
    //object5.rotation.set(0,Math.PI/4,0);
    object5.scene.position.set(0, -0.4, 0);

    const object6 = await loadGLTF('./landmine1.gltf');
    object6.scene.scale.set(0.002, 0.002, 0.002);
    object6.scene.position.set(0, -0.4, 0);

    
    const raccoonAnchor = mindarThree.addAnchor(0);
    raccoonAnchor.group.add(raccoon.scene);

    const bearAnchor = mindarThree.addAnchor(1);
    bearAnchor.group.add(bear.scene);
    
    const object3Anchor = mindarThree.addAnchor(2);
    object3Anchor.group.add(object3.scene);

    const object4Anchor = mindarThree.addAnchor(3);
    object4Anchor.group.add(object4.scene);

    const object5Anchor = mindarThree.addAnchor(4);
    object5Anchor.group.add(object5.scene);

    const object6Anchor = mindarThree.addAnchor(5);
    object6Anchor.group.add(object6.scene);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
