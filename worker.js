export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect apex (thundrlabs.com) to canonical www, preserving path + query.
    if (url.hostname === "thundrlabs.com") {
      url.hostname = "www.thundrlabs.com";
      return Response.redirect(url.toString(), 301);
    }

    // Everything else: serve the static Astro build.
    return env.ASSETS.fetch(request);
  },
};
