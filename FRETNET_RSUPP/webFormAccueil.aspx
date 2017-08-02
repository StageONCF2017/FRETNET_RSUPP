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
		<div id="divFrmOuverture">
			<label id="lblMois">Mois</label>
			<input type="number" min="01" max="12" step="1" value="01"/> <br />
			<label id="lblAnnee">Année</label>
			<input type="number" min="1900" max="2099" step="1" value="2017" /> <br />
			<label id="lblGare">Gare</label>
			<input type="text" /> <br />
			<input type="submit" value="Ouvrir le mois"/>
		</div>
			
</asp:Content>
