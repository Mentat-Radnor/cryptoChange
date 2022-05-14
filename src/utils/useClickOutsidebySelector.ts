import { onMounted, onUnmounted } from "vue";

export function useClickOutside(dataAttr: string, f: Function) {
  function $handleClick(event: { target: any }) {
    if (!event.target.closest(dataAttr)) {
      f();
      return;
    }
  }

  onMounted(() => {
    window.addEventListener("click", $handleClick);
  });

  onUnmounted(() => window.removeEventListener("click", $handleClick));
}
