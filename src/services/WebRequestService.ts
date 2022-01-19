export default class WebRequestService {
  public static async Get(url: string): Promise<any> {
    const response = await fetch(url)

    if (response.ok) {
      return response.json()
    } else {
      throw new Error("Error fetching data");
    }
  }
}