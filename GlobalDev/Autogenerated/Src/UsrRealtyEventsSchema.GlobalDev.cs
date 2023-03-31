namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("488968a7-bbe1-45fe-8e50-40a755b784d3");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("980e029f-879b-49a7-b3ec-4f899ff46042");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,65,79,194,64,16,133,239,253,21,147,198,67,155,152,6,175,162,36,130,104,72,140,26,1,47,198,195,178,29,234,154,237,110,179,187,69,209,240,223,157,237,66,40,133,131,115,161,76,223,124,125,111,50,138,149,104,43,198,17,102,104,12,179,122,233,178,145,86,75,81,212,134,57,161,85,20,253,70,17,80,213,86,168,2,166,107,235,176,236,183,91,237,65,131,217,88,57,225,4,218,255,104,178,241,10,149,219,73,223,154,246,186,233,61,8,250,142,66,147,76,249,7,150,236,145,108,194,53,196,115,107,94,144,73,183,30,73,102,173,224,113,250,30,102,171,122,33,5,7,238,219,16,36,39,104,112,9,67,102,241,196,155,64,217,70,109,1,245,138,156,139,28,97,165,69,14,79,106,162,44,26,71,145,18,189,248,68,238,192,162,202,209,156,67,96,14,113,73,249,26,242,141,41,44,96,186,39,182,224,190,22,100,36,107,3,119,36,76,251,135,202,128,6,211,164,162,45,36,161,145,134,129,142,56,71,46,74,38,161,50,130,251,149,133,169,236,30,221,108,93,97,62,210,178,46,213,43,147,53,94,109,165,131,196,175,245,217,235,231,211,219,184,251,117,177,132,36,192,6,112,209,219,85,122,40,234,100,243,133,217,196,142,152,226,40,49,39,31,206,212,216,63,86,89,103,252,125,208,17,90,86,224,12,203,74,50,71,190,143,149,190,182,97,230,180,50,58,82,69,251,167,11,245,217,30,52,103,82,252,176,133,196,105,67,76,246,167,18,110,44,62,135,184,137,61,177,51,173,135,162,56,10,122,108,135,108,135,70,118,167,77,201,92,210,177,73,200,139,172,55,60,59,137,114,31,70,127,129,194,47,24,127,115,172,188,211,221,124,87,190,217,255,221,62,250,159,40,218,252,1,6,10,58,10,158,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("8c9ca3c4-e2e1-6e4a-083e-d807cac85278"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("980e029f-879b-49a7-b3ec-4f899ff46042"),
				CreatedInSchemaUId = new Guid("488968a7-bbe1-45fe-8e50-40a755b784d3"),
				ModifiedInSchemaUId = new Guid("488968a7-bbe1-45fe-8e50-40a755b784d3")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("488968a7-bbe1-45fe-8e50-40a755b784d3"));
		}

		#endregion

	}

	#endregion

}

