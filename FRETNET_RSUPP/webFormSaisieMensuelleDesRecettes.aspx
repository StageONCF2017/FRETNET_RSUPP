<%@ Page Title="Saisie mensuelle des recettes supplémentaires" Language="C#" MasterPageFile="~/master.Master" AutoEventWireup="true" CodeBehind="webFormSaisieMensuelleDesRecettes.aspx.cs" Inherits="FRETNET_RSUPP.webFormGestionDesEnregistrements" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
		<style type="text/css">
		.titresDesPages {
			text-align:center;
			color:#ff6a00;
		}		
	</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
	<br />
	<div id="dvForulaireSaisie">
		<asp:Label ID="LblCodeGare" runat="server" Text="Code Gare :"></asp:Label>
		<asp:DropDownList ID="DropDownListCodeGare" runat="server" DataSourceID="SqlDataSource1" DataTextField="Gare_UNQUE_VIEW.Code_Gare"></asp:DropDownList>
	</div>
	<p>
	<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" EmptyDataText="There are no data records to display.">

		<Columns>
			<asp:BoundField DataField="CodeGareRSUPP" HeaderText="Code Gare " SortExpression="CodeGareRSUPP" />
			<asp:BoundField DataField="AnneeRSUPP" HeaderText="Annee" SortExpression="AnneeRSUPP" />
			<asp:BoundField DataField="MoisRSUPP" HeaderText="Mois" SortExpression="MoisRSUPP" />
			<asp:BoundField DataField="TotalMensuelTape" HeaderText="Total Mensuel tapé" SortExpression="TotalMensuelTape" />
		</Columns> 
	</asp:GridView> 
	</p>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:FRETNET_DBConnectionString1 %>" ProviderName="<%$ ConnectionStrings:FRETNET_DBConnectionString1.ProviderName %>" SelectCommand="SELECT [ControleRSUPP_Id], [CodeGareRSUPP] 'Code gare', [AnneeRSUPP] 'Année', [MoisRSUPP] 'Mois', [Utilisateur], [Date_MAJ], [TotalMensuelTape] 'Total mensuel tapé', [TotalMensuelCalcule], [Difference] FROM [FRETNET_ControleRecette_SUPPLEMENTIARE]"></asp:SqlDataSource>
</asp:Content>
