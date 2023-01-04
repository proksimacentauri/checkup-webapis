namespace adressapi.Models;

public class Address
{
  public int? Id { get; set; }
  public string? StreetName { get; set; }
  public int? StreetNo { get; set; }
  public int? PostalCode { get; set; }
  public string? City { get; set; }
}