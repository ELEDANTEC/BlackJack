let valeurbanque=0;
let valeurjoueur=0;
let carte;
let flag=false;
function carteAleatoire() 
{
    return Math.floor(Math.random() * (52-1) + 1);
}
function valeur(total)
{
    if((carte%13)==0 || (carte%13)>10)
    {
        if(flag==true&&(total+10)>21)
        {
            flag=false;
            return 0;
        }
        else
        {
            return 10;
        }
    }
    else if((carte%13)==1)
    {
        if((total+11)>21)
        {
            return 1;
        }
        else
        {
            flag=true;
            return 11;
        }
    }
    else
    {
        if(flag==true&&(total+(carte%13))>21)
        {
            flag=false;
            return ((carte%13)-10);
        }
        else
        {
            return (carte%13);
        }
    }
}
function nouvelleCarte()
{
    carte=carteAleatoire();
    valeurjoueur+=valeur(valeurjoueur);
    document.getElementById("cartesjoueur").innerHTML+="&nbsp;<img src='images/"+carte+".jpg'>";
    document.getElementById("valeurcartesjoueur").innerHTML="Vous avez "+valeurjoueur+". Carte ou reste ?";
    if(valeurjoueur>21)
    {
        window.alert("21 dépassé, la manche est perdu.");
    }
    if(valeurjoueur==21)
    {
        window.alert("Blackjack ! ! ! Vous avez gagné ! ! !");
    }
}
function tirageBanque()
{
    while(valeurbanque<valeurjoueur)
    {
        carte=carteAleatoire();
        valeurbanque+=valeur(valeurbanque);
        document.getElementById("cartesbanque").innerHTML+="&nbsp;<img src='images/"+carte+".jpg'>";
        document.getElementById("valeurcartesbanque").innerHTML="La banque a "+valeurbanque+".";
    }
    if(valeurjoueur<valeurbanque && valeurbanque<22)
    {
        window.alert("La banque a gagné !");
    }
    else
    {
        window.alert("Gagné!");
    }
}