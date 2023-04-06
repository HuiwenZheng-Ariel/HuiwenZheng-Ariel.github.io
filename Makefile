.PHONY: github

github:
	rm -rf src/.vuepress/dist
	npm run docs:build
	cd src/.vuepress/dist && \
	git init && \
	git add -A && \
	git commit -m 'deploy at $(shell date)' && \
	git branch -m gh-pages && \
	git push -f git@github.com:HuiwenZheng-Ariel/HuiwenZheng-Ariel.github.io.git gh-pages:gh-pages