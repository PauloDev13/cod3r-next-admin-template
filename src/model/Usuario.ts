export default interface Usuario {
  uid: string;
  email: string | null;
  nome: string | null;
  token: string | null;
  provedor?: string;
  imagemUrl: string | null;
}
