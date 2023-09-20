using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ABCInsurance.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Member",
                columns: table => new
                {
                    UNIQUEPERSONKEY = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LASTNAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FIRSTNAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MIDDLEINITIAL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATEOFBIRTH = table.Column<DateTime>(type: "datetime2", nullable: false),
                    GENDER = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PERMANENTADDRESSLINE1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PERMANENTADDRESSLINE2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PERMANENTCITY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PERMANENTSTATE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PERMANENTZIPCODE = table.Column<int>(type: "int", nullable: false),
                    PERMANENTCOUNTY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TELEPHONENUMBER = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EMAIL = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Member", x => x.UNIQUEPERSONKEY);
                });

            migrationBuilder.CreateTable(
                name: "Pharmacy",
                columns: table => new
                {
                    MEMBERNUMBER = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PROVIDERID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RXFILLDATA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RXDAYSSUPPLY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QUANTITY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UNITSOFMEASURE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pharmacy", x => x.MEMBERNUMBER);
                });

            migrationBuilder.CreateTable(
                name: "Provider",
                columns: table => new
                {
                    PROVIDERID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LASTNAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MIDDLEINITIAL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FIRSTNAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TAXONOMYCODE1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HPSPECIALITYCODE1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PAYORID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONTRACTED = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Provider", x => x.PROVIDERID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Member");

            migrationBuilder.DropTable(
                name: "Pharmacy");

            migrationBuilder.DropTable(
                name: "Provider");
        }
    }
}
