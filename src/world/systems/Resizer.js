class Resizer {
    constructor(container, camera, renderer) {
      
      this.setSize(container, camera, renderer);

      window.addEventListener('resize', () => {
        // set the size again if a resize occurs
        this.setSize(container, camera, renderer);

        // perform any custom actions
        this.onResize();
      });
    };

    setSize(container, camera, renderer) {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    onResize() {
      // empty for now
    };
}
  
  export { Resizer };
  