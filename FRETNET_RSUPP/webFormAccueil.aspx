<%@ Page Title="Page d'Accueil" Language="C#" MasterPageFile="~/master.Master" AutoEventWireup="true" CodeBehind="webFormAccueil.aspx.cs" Inherits="FRETNET_RSUPP.accueil" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
		<style type="text/css">
				
			#divFrmOuverture {
				width: 222px;
				text-align:center;
				color:#ff6a00;
				position:absolute;
				margin:15px;
				margin-left:200px;
				border-color:#ff6a00;
				border-width:medium;
			}
	</style>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
		
			
    <p>
        <br />
    </p>
    <p>
		<asp:Label ID="LblMois" runat="server" Text="Mois">Mois</asp:Label>  
		&nbsp;:<asp:ListBox ID="LstBxMois" runat="server" Height="21px"  Width="122px" style="margin-left: 114px; margin-top: 49px">
           
        </asp:ListBox>
    </p>
    <p>
		<asp:Label ID="LblAnnee" runat="server" Text="Annee">Année :</asp:Label> 
        <asp:ListBox ID="LstBxAnnee" runat="server" Height="20px"  Width="119px" style="margin-left: 105px">
            
        </asp:ListBox>
    </p>
    <p>
		<asp:Button ID="BtnMoisAnneeOuverture" runat="server" Text="Ouvrir le mois et l'année" style="margin-left: 141px" OnClick="BtnMoisAnneeOuverture_Click" />
    </p>
	 <p>
		<asp:Button ID="BtnMoisAnneeFermeture" runat="server" Text="Fermer le mois et l'année" style="margin-left: 141px" OnClick="BtnMoisAnneeFermeture_Click" />
    </p>
   
	<br />
	<asp:Label ID="LblEtatOuverture" runat="server" Text=" L'état d'ouverture :"></asp:Label>
	
			
</asp:Content>
