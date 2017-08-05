using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FRETNET_RSUPP
{
	public partial class webFormGestionDesEnregistrements : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			if( accueil.anneeOuverture != ""  &&  accueil.moisOuverture != "")
			{ 						
			
				LblEtatOuvertureInsertion.ForeColor = System.Drawing.Color.Green;
				LblEtatOuvertureInsertion.Text = "Etat d'ouverture : Le mois " + accueil.moisOuverture + " de l'année " + accueil.anneeOuverture + " est en état d'ouverture";
			    TxtBxAnnee.Text = accueil.anneeOuverture;
				TxtBxMois.Text = accueil.moisOuverture;

			}
			
		}

		protected void BtnSaisie_Click(object sender, EventArgs e)
		{
			TxtBxAnnee.Text = accueil.anneeOuverture;
			TxtBxMois.Text = accueil.moisOuverture;
			TxtBxTotalTape.Text ="";
			try
			{
				SqlDataSource2.Insert();
				BtnSaisie.Attributes.Add("onClick", "javascript:alert('Insertion effectuée');");
			}
			catch (Exception ex)
			{
				BtnSaisie.Attributes.Add("onClick", "javascript:alert('Oops! Insertion échouée');");
			}
		}
	}
}