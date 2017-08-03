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
		//Ces deux variables vont être utiliser par tout dans les autre pages de ce module
		public static String  moisOuverture;
		public static String  anneeOuverture;

		//declaration d'une methode pour limiter les valeurs proposés 
		//par les ListBoxs du formulaire d'accueil
		private void BornerLesValeurdesListBoxMoisAnnee()
		{   //Pour le mois
			for (int i = 1; i <= 12; i++)
				{
					String iString = i.ToString();
					LstBxMois.Items.Add(new ListItem(iString, iString));
				}
			LstBxMois.SelectedValue = "8";

			//Pour l'année
			for (int i = 2000; i <= 2099; i++)
			{
				String iString = i.ToString();
				LstBxAnnee.Items.Add(new ListItem(iString, iString));
			}
			LstBxAnnee.SelectedValue = "2017";
		}




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
			//Appeler la méthode BornerLesValeurdesListBoxMoisAnnee() pourafficher les mois et les années à choisir
			BornerLesValeurdesListBoxMoisAnnee();

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

		protected void BtnMoisAnneeFermeture_Click(object sender, EventArgs e)
		{
			//reinitialiser les valeurs stockés du mois et année d'ouverture 
			moisOuverture = "";
			anneeOuverture = "";
			LblEtatOuverture.Text = " L'état d'ouverture : Aucun mois n'est en ouverture";
		}
	}
}