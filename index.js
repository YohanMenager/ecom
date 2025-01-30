
function toggleMenu()
{
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    let burger = document.querySelector('.burger');
    burger.classList.toggle('active');

}

function afficherConnexion()
{
    let connexion = document.getElementById('connexion');
    if(!connexion.classList.contains('active'))
    {
        document.getElementById('connexion').classList.add('active');
        document.getElementById('login-header').classList.add('active');
        document.getElementById('inscription').classList.remove('active');
        document.getElementById('signup-header').classList.remove('active');
        document.querySelector('.barre').style.left = '0';
    }


}
function afficherInscription()
{
    let inscription = document.getElementById('inscription');
    if(!inscription.classList.contains('active'))
    {
        document.getElementById('connexion').classList.remove('active');
        document.getElementById('signup-header').classList.add('active');
        document.getElementById('inscription').classList.add('active');
        document.getElementById('login-header').classList.remove('active');
        document.querySelector('.barre').style.left = '50%';
    }
}