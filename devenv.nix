{ pkgs, ... }: {
  # disable downloading prebuilt assets from cachix and hide the notice of it
  cachix.enable = false;

  # add nodejs support
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;
  };

  # run dev server
  processes = {
    server.exec = "npm run dev";
  };
}
