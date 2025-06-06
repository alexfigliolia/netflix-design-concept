varying vec2 vUv;
uniform vec2 scale;
uniform vec2 imageBounds;
uniform float resolution;
uniform vec3 color;
uniform sampler2D map;
uniform float radius;
uniform float zoom;
uniform float grayscale;
uniform float opacity;
varying float vPointerDistance;
varying float vNoise;
uniform float uHoverState;

const vec3 luma = vec3(.299, 0.587, 0.114);

vec4 toGrayscale(vec4 color, float intensity) {
  return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
}
vec2 aspect(vec2 size) {
  return size / min(size.x, size.y);
}

const float PI = 3.14159265;
  
// from https://iquilezles.org/articles/distfunctions
float udRoundBox( vec2 p, vec2 b, float r ) {
  return length(max(abs(p)-b+r,0.0))-r;
}

void main() {
  vec2 s = aspect(scale);
  vec2 i = aspect(imageBounds);
  float rs = s.x / s.y;
  float ri = i.x / i.y;
  vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
  vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
  vec2 uv = vUv * s / new + offset;
  vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);

  vec2 res = vec2(scale * resolution);
  vec2 halfRes = 0.5 * res;
  float b = udRoundBox(vUv.xy * res - halfRes, halfRes, resolution * radius);    
  vec3 a = mix(vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0, 1.0, b));

  vec4 imageTexture = toGrayscale(texture2D(map, zUv) * vec4(color, opacity * a), grayscale);

  gl_FragColor = imageTexture;
  gl_FragColor.rgb += 0.1 * vec3(vNoise);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}