import { c as create_ssr_component, o as onDestroy, b as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { C as Card } from "../../../chunks/Card.js";
const css = {
  code: ".search__input.svelte-grcz3k{width:100%;border:1px solid rgba(var(--color-surface-400) / 0.4);border-radius:1rem}input.svelte-grcz3k{background:rgba(var(--color-surface-500) / 0.3);border-radius:0.9rem;border:none;outline:none}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { onMount, onDestroy } from \\"svelte\\";\\nimport Card from \\"../../components/Card.svelte\\";\\nlet value;\\nlet movies = [];\\nlet error = null;\\nlet loading = false;\\nconst characters = [\\"\\", \\".\\", \\"..\\", \\"...\\"];\\nlet index = 0;\\nlet currentChar = characters[index];\\nconst updateCharacter = () => {\\n  index = (index + 1) % characters.length;\\n  currentChar = characters[index];\\n};\\nlet interval;\\nasync function fetchSearch(title) {\\n  const res = await fetch(\\"http://192.168.68.111:3001/api/v1/movie/s/\\" + title + \\"/1\\");\\n  const data = await res.json();\\n  return {\\n    post: {\\n      response: data\\n    }\\n  };\\n}\\nfunction search(title) {\\n  movies = [];\\n  fetchSearch(title).then((result) => {\\n    movies = result.post.response.data.results;\\n  });\\n}\\nonMount(async () => {\\n  const body = document.body.style;\\n  body.backgroundImage = `radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),\\n\\t\\t\\tradial-gradient(at 98% 100%, rgba(var(--color-warning-500) / 0.28) 0px, transparent 50%)`;\\n  interval = setInterval(updateCharacter, 500);\\n  if (loading) return;\\n  loading = true;\\n  try {\\n    const response = await fetch(\\"http://192.168.68.111:3001/api/v1/movie/discover/1\\");\\n    const data = await response.json();\\n    if (data.message === \\"success\\") {\\n      movies = [...movies, ...data.data.results];\\n    } else {\\n      error = \\"Failed to fetch movies.\\";\\n    }\\n  } catch (err) {\\n    console.log(err);\\n    error = \\"Internal error occured\\";\\n  } finally {\\n    loading = false;\\n  }\\n  return () => {\\n    body.backgroundImage = \\"\\";\\n  };\\n});\\nonDestroy(() => {\\n  clearInterval(interval);\\n});\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>LMDB - Пошук</title>\\n</svelte:head>\\n\\n<div class=\\"mt-[3rem] w-full\\">\\n\\t<div class=\\"space-y-5\\">\\n\\t\\t<h1 class=\\"h1\\">Пошук контенту</h1>\\n\\t\\t<div class=\\"search__input relative\\">\\n\\t\\t\\t<form on:submit={search(value)}>\\n\\t\\t\\t\\t<input class=\\"w-full\\" type=\\"text\\" bind:value placeholder=\\"Ну давай, здивуй мене.\\" />\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"absolute top-0 right-0 z-10 h-full bg-surface-500/30 rounded-r-[0.9rem] px-3\\n\\t\\t\\thover:bg-warning-500 transition\\">Пошук</button\\n\\t\\t\\t\\t>\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<div\\n\\tdata-sveltekit-reload\\n\\tclass=\\"mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full\\"\\n>\\n\\t{#if error !== null}\\n\\t\\t<div class=\\"w-full text-center font-bold text-[3rem] py-[6rem]\\">Сталася помилка (500)</div>\\n\\t{:else}\\n\\t\\t{#each movies as movie}\\n\\t\\t\\t{#if movie.original_language !== \'ru\'}\\n\\t\\t\\t\\t<Card {movie} />\\n\\t\\t\\t{/if}\\n\\t\\t{/each}\\n\\t\\t{#if !loading}\\n\\t\\t\\t<div class=\\"w-full flex justify-center\\">\\n\\t\\t\\t\\t<a class=\\"btn variant-filled-surface\\" href=\\"/\\">Хочу ще!</a>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t{/if}\\n\\t{#if loading}\\n\\t\\t<div class=\\"w-full text-center font-bold text-[3rem] py-[6rem]\\">Завантаження{currentChar}</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.search__input {\\n\\t\\twidth: 100%;\\n\\t\\tborder: 1px solid rgba(var(--color-surface-400) / 0.4);\\n\\t\\tborder-radius: 1rem;\\n\\t}\\n\\tinput {\\n\\t\\tbackground: rgba(var(--color-surface-500) / 0.3);\\n\\t\\tborder-radius: 0.9rem;\\n\\t\\tborder: none;\\n\\t\\toutline: none;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuGC,4BAAe,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtD,aAAa,CAAE,IAChB,CACA,mBAAM,CACL,UAAU,CAAE,KAAK,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAChD,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IACV"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let movies = [];
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-15v7i70_START -->${$$result.title = `<title>LMDB - Пошук</title>`, ""}<!-- HEAD_svelte-15v7i70_END -->`, ""} <div class="mt-[3rem] w-full"><div class="space-y-5"><h1 class="h1" data-svelte-h="svelte-1qh4cdg">Пошук контенту</h1> <div class="search__input relative svelte-grcz3k"><form><input class="w-full svelte-grcz3k" type="text" placeholder="Ну давай, здивуй мене."${add_attribute("value", value, 0)}> <button class="absolute top-0 right-0 z-10 h-full bg-surface-500/30 rounded-r-[0.9rem] px-3 hover:bg-warning-500 transition" data-svelte-h="svelte-j09ykx">Пошук</button></form></div></div></div> <div data-sveltekit-reload class="mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full">${`${each(movies, (movie) => {
    return `${movie.original_language !== "ru" ? `${validate_component(Card, "Card").$$render($$result, { movie }, {}, {})}` : ``}`;
  })} ${`<div class="w-full flex justify-center" data-svelte-h="svelte-1ibuw2p"><a class="btn variant-filled-surface" href="/">Хочу ще!</a></div>`}`} ${``} </div>`;
});
export {
  Page as default
};