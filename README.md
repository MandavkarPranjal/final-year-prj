# Hms

## Start the app

To start the development server run `nx serve web`, `nx serve dashboard` & `nx serve api`. Open your browser and navigate to http://localhost:4200/ http://localhost:4201. Happy coding!




## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).
