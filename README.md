# CV

## Development

### Using nvm/fnm or native node

Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)/[fnm](https://github.com/Schniz/fnm#installation), or the same node version as in the [.nvmrc](./.nvmrc) file

```bash
# use projects node version
nvm install
nvm use

# install packages and start dev server
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000)

### Using devenv

Setup [devenv](https://devenv.sh/getting-started/)

```bash
# start dev server (defined in devenv.nix)
devenv up -d
```

Open [localhost:3000](http://localhost:3000)

### 3D Portrait Workflow

1. Generate a .ply splat file using [docs.nerf.studio/nerfology/methods/splat](https://docs.nerf.studio/nerfology/methods/splat.html)  
   Example:

    ```bash
    # requires nvidia-container-toolkit (https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
    docker run --gpus all \
        -u $(id -u) \
        -v $(pwd):/workspace \
        -v $HOME/.nerfstudio-cache:/.cache \
        -e MPLCONFIGDIR=/.cache/mpl \
        -e TORCHINDUCTOR_CACHE_DIR=/tmp/torchinductor \
        -p 7007:7007 \
        -w /workspace \
        --rm \
        -it \
        --shm-size=12gb \
        ghcr.io/nerfstudio-project/nerfstudio:latest

    # split a video into multiple image frames and colmap them
    ns-process-data video --data $FILENAME.mp4 --output-dir .generated/$FILENAME/process-data
    # train the splat itself (progress can be viewed at localhost:7007)
    ns-train splatfacto-big --data .generated/$FILENAME/process-data --output-dir .generated/$FILENAME/train/splatfacto-big
    # export it (if running again after another train, "*" should be switched with excact path to output from previous step)
    ns-export gaussian-splat --load-config .generated/$FILENAME/train/splatfacto-big/process-data/splatfacto/*/config.yml --output-dir .generated/$FILENAME/export/gaussian-splat/splatfacto-big
    cp .generated/$FILENAME/export/gaussian-splat/splatfacto-big/splat.ply $FILENAME.ply
    ```

2. Crop and cleanup output via [superspl.at/editor](https://superspl.at/editor) ([GitHub](https://github.com/playcanvas/supersplat))
3. Convert to .spz via [sparkjs.dev/examples/#editor](https://sparkjs.dev/examples/#editor) ([GitHub](https://github.com/sparkjsdev/spark))

[github.com/sparkjsdev/spark](https://github.com/sparkjsdev/spark) is also used in this site itself to render the model

## Deployment

Deployment is handled via a github workflow that triggers either on numeric tags matching format x.x.x, or manual triggering from the ui.

This is defined in [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)  
Which essentially runs:

```bash
npm ci
npm run build
```

To produce a static Next.js build, which is automatically hosted on github pages with a custom domain.

Though theoretically this could be just as easily hosted via GitLab Pages, or in AWS/GCS, but in this case GitHub Pages fits best as the repo itself is available on GitHub too.
