using System;
using System.Collections.Generic;
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
			LblEtatOuvertureInsertion.ForeColor= System.Drawing.Color.Green;
			LblEtatOuvertureInsertion.Text = "Etat d'ouverture : Le mois "+ accueil.moisOuverture+" de l'année " + accueil.anneeOuverture +" est en état d'ouverture";
		}
	}
}