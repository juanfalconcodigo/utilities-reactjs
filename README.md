# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// guia github

///git remote branch download
git checkout -b feature/falcon origin/feature/falcon
git pull origin feature/falcon
///
git checkout -b rama/nombre

git pull origen rama/nombre
///logs details
 git log --stat
Lo primero que podemos hacer es ver los log para determinar cuáles son los nombres que asignamos a los commits ejecutados, para ello podemos ejecutar:

$ git log --graph --online 

Ahora bien para cambiar el mensaje del último commit, lo podemos hacer de la siguiente manera:

$ git commit --amend -m "Nuevo mensaje del commit."
change name branch
git branch -m new-name
///////tags
git tag v0.0.2 -m "Segunda versión, cambios menores"
Etiquetado más tarde
También puede etiquetar confirmaciones después de haberlas superado. Suponga que su historial de confirmaciones se ve así:

$ git log --pretty=oneline
15027957951b64cf874c3557a0f3547bd83b3ff6 Merge branch 'experiment'
a6b4c97498bd301d84096da251c98a07c7723e65 Create write support
0d52aaab4479697da7686c15f77a3d64d9165190 One more thing
6d52a271eda8725415634dd79daabbc4d9b6008e Merge branch 'experiment'
0b7434d86859cc7b8c3d5e1dddfed66ff742fcbc Add commit function
4682c3261057305bdd616e23b64b0857d832627b Add todo file
166ae0c4d3f420721acbb115cc33848dfcc2121a Create write support
9fceb02d0ae598e95dc970b74767f19372d61af8 Update rakefile
964f16d36dfccde844893cac5b347e7b3d44abbc Commit the todo
8a5cbc430f1a9c3d00faaeffd07798508422908a Update readme
Ahora, suponga que olvidó etiquetar el proyecto en v1.2, que estaba en la confirmación "Actualizar rakefile". Puede agregarlo después del hecho. Para etiquetar esa confirmación, especifica la suma de comprobación de la confirmación (o parte de ella) al final del comando:

$ git tag -a v1.2 9fceb02
Puede ver que ha etiquetado la confirmación:
////pushear tags
To push a single tag:

git push origin <tag_name>
And the following command should push all tags (not recommended):

# not recommended
git push --tags
///////////////
Git nos permite ver los cambios realizados sobre un archivo. Y es tan fácil como lo siguiente:git diff nombre_archivo
///////cambiar comment
git commit --amend -m "dede"
/////guia de estilos
http://tomasdelvechio.github.io/old/440/
//////////deploy github actions
https://blog.logrocket.com/ci-cd-node-js-github-actions/
///markdown
https://support.squarespace.com/hc/es/articles/206543587-Apuntes-sobre-Markdown
////delete remote
git remote rm origin
/////token de damsolutions
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
/////two accounts
https://stackoverflow.com/questions/73415573/how-can-i-switch-between-github-accounts-locally-in-the-projects
https://desarrolloweb.com/articulos/autenticar-github-personal-access-token
git clone ccc
https://stackoverflow.com/questions/2643502/git-how-to-solve-permission-denied-publickey-error-when-using-git
git config user.name ccc
git config user.email ccc
git remote add origin  https://ccc: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@github.com/ccc/ccc.git



//user ingi
git config --list
///markdown
https://www.markdownguide.org/basic-syntax/
/// SACAR ARCHIVO DEL STAGE
git reset <archivo> reviertes el archivo que añadiste con git add . antes un commit.
///para ver los origenes que tenemos
git remote -v 
///agregar imagens
![My Image](images/my-image.jpg)