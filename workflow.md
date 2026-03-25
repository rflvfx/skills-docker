# Docker Workflow

- `make up` boots app + db locally
- Dev override mounts source with hot reload
- Multi-stage build keeps the prod image small
- Volumes for db persistence; prune weekly
