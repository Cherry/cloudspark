import { program } from "commander";
import interactive from "./init/interactive";
import express from "./init/express";

const cli = program
	.name("cloudspark")
	.description(
		"Cloudspark CLI, your CommunityApproved™ Cloudflare Developer Platform CLI",
	);

cli
	.command("init")
	.description("Initialize a new Worker")
	.argument("[repo]", "The repository to initialize.")
	.argument("[folder]", "The folder to initialize to.")
	.option("--force", "Force clone the template, ignoring existing files.")
	.action(async (repo, folder, args) => {
		if (repo == null) {
			await interactive(args.force ?? false);
		} else {
			await express(repo, folder, args.force ?? false);
		}
	});

await cli.parseAsync();
