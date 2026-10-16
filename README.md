<div align="center">
<img src="https://cdn.simpleicons.org/docker" height="70"/>

# skills-docker

**Docker & Compose** — multi-stage builds, orquestração local e boas práticas.

</div>

## 📋 Sobre

Containerização completa de uma app Node: Dockerfile otimizado, compose para dev e prod, e workflow documentado.

## 📂 Conteúdo

- `Dockerfile` — build base
- `Dockerfile.multistage` — imagem enxuta multi-stage
- `docker-compose.yml` — app + MySQL
- `docker-compose.dev.yml` — override dev com hot reload
- `Makefile` — atalhos (`make up`, `make logs`)
- `.dockerignore` / `workflow.md`

## 🚀 Quick start

```bash
make up    # sobe app + db
make logs  # acompanha os logs
```

## 🧠 Tópicos cobertos

`multi-stage` `compose` `volumes` `networks` `healthchecks` `image slimming`
