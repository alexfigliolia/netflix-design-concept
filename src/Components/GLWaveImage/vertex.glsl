varying vec2 vUv;
uniform float uTime;
uniform vec2 uHover;
uniform float uXPointerFromCenter;
uniform vec2 uMouseCoordinates;
uniform float uHoverState;
varying float vPointerDistance;
varying float vNoise;

void main() {
  vec3 newPosition = position;
  
  vPointerDistance = distance(uv, uMouseCoordinates);

  newPosition.z += uHoverState * 10. * sin((1. - vPointerDistance) * 5. + uTime * 5.);

  newPosition.x += uXPointerFromCenter / 30.;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1.);

  vNoise = vPointerDistance * uHoverState * 1.5;

  vUv = uv;
} 