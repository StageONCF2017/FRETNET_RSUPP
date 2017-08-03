using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FRETNET_RSUPP
{
	
	public partial class accueil : System.Web.UI.Page
	{
	//Declaration des variables qui doivent mémoriser les informations d'ouverture
		public static String moisOuverture;
		public static String anneeOuverture;

	//Methode StockerMoisAnneeeOuverture pour stocker le mois et l'année séléctionnées 
	//dans le formulaire d'ouverture dans les variables static moisOuverture et anneeOuverture
		public void StockerMoisAnneeOuverture()
		{
			moisOuverture = LstBxMois.SelectedValue;
			anneeOuverture = LstBxAnnee.SelectedValue;
			LblEtatOuverture.ForeColor = System.Drawing.Color.Green;
			LblEtatOuverture.Text = " L'état d'ouverture : Le mois "+ moisOuverture+ " de l'année " + anneeOuverture + " est en état d'ouverture";
	
		}
		protected void Page_Load(object sender, EventArgs e)
		{
		//Initialiser l'état d'ouverture en indiquant que aucun mois n'est en état d'ouverture
			LblEtatOuverture.ForeColor = System.Drawing.Color.Red;
			LblEtatOuverture.Text = " L'état d'ouverture : Aucun mois n'est en ouverture";
		}

		//Evennement clique sur le bouton d'ouverture d'un mois
		//Le clique sur ce bouton active le stockage
		protected void BtnMoisAnneeOuverture_Click(object sender, EventArgs e)
		{
			StockerMoisAnneeOuverture();
		}
	}
}