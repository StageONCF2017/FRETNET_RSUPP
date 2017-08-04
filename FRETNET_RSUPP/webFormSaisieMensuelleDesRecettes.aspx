<%@ Page Title="Saisie mensuelle des recettes supplémentaires" Language="C#" MasterPageFile="~/master.Master" AutoEventWireup="true" CodeBehind="webFormSaisieMensuelleDesRecettes.aspx.cs" Inherits="FRETNET_RSUPP.webFormGestionDesEnregistrements" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
		<style type="text/css">
		.titresDesPages {
			text-align:center;
			color:#ff6a00;
		}		
			.auto-style3 {
				width: 157px;
			}
	</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
	<br />
		<asp:Label ID="LblEtatOuvertureInsertion" runat="server" Text="Etat d'Ouverture"></asp:Label>
	<br />
	<table style="width: 100%;">
		<tr>
			<td class="auto-style3">Code Gare :</td>
			<td>
				<asp:ListBox ID="LstBxCodeGare" runat="server" DataSourceID="SqlDataSource1" DataTextField="CODE_GARE" DataValueField="CODE_GARE"></asp:ListBox>
				<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:FRETNET_DBConnectionString %>" SelectCommand="SELECT [CODE_GARE] FROM [GARE_UNIQUE_VIEW]"></asp:SqlDataSource>
			</td>
			
		</tr>
		<tr>
			<td class="auto-style3">Année</td>
			<td>
				<asp:TextBox ID="TxtBxAnnee" runat="server"></asp:TextBox>
			</td>
			
		</tr>
		<tr>
			<td class="auto-style3">Mois</td>
			<td>
				<asp:TextBox ID="TxtBxMois" runat="server"></asp:TextBox>
			</td>
			
		</tr>
		<tr>
			<td class="auto-style3">Total Mensuel Déclaré : </td>
			<td>
				<asp:TextBox ID="TxtBxTotalTape" runat="server"></asp:TextBox>
			</td>
			
		</tr>
		<tr>
			<td class="auto-style3"> </td>
			<td>
				<asp:Button ID="BtnSaisie" runat="server" Text="Inserer" OnClick="BtnSaisie_Click" />
			</td>
			
		</tr>
	</table>

<asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionStringSaisie %>" InsertCommand="Insert into [FRETNET_ControleRecette_SUPPLEMENTIARE]
values (@CodeGareRSUPP, @AnneeRSUPP, @MoisRSUPP,NULL,GETDATE(), @TotalMensuelTape,0,@TotalMensuelTape)" SelectCommand="SELECT [CodeGareRSUPP], [AnneeRSUPP], [MoisRSUPP], [TotalMensuelTape] FROM [FRETNET_ControleRecette_SUPPLEMENTIARE]">
	<InsertParameters>
		<asp:ControlParameter ControlID="LstBxCodeGare" Name="CodeGareRSUPP" PropertyName="SelectedValue" />
		<asp:ControlParameter ControlID="TxtBxAnnee" Name="AnneeRSUPP" PropertyName="Text" />
		<asp:ControlParameter ControlID="TxtBxMois" Name="MoisRSUPP" PropertyName="Text" />
		<asp:ControlParameter ControlID="TxtBxTotalTape" Name="TotalMensuelTape" PropertyName="Text" />
	</InsertParameters>
</asp:SqlDataSource>
</asp:Content>

