varying vec2 vUv;
varying vec2 vPos;

void main() {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
  vUv = uv;
  vPos = position.xy;
}