import { makeAutoObservable, runInAction } from "mobx";
import axios from "./axios";
import { AxiosError } from "axios";
enum Status {
  loading = "loading",
  error = "error",
  fulfilled = "fulfilled",
}
export interface CompanyCard {
  company: {
    companyId: string;
  };
  mobileAppDashboard: {
    accentColor: `#${string}`;
    backgroundColor: `#${string}`;
    cardBackgroundColor: `#${string}`;
    companyName: string;
    highlightTextColor: `#${string}`;
    logo: string;
    mainColor: `#${string}`;
    textColor: `#${string}`;
  };
  customerMarkParameters: {
    loyaltyLevel: {
      cashToMark: number;
      name: string;
    };
    mark: number;
  };
}
interface AxiosData {
  limit: number;
  offset: number;
  companies: CompanyCard[];
}
class Cards {
  cards: CompanyCard[] = [];
  status = { condition: Status.loading, message: "Подгрузка компаний" };
  filters = {
    limit: 5,
  };
  constructor() {
    makeAutoObservable(this);
  }
  async fetchCards() {
    try {
      const { data } = await axios.post<AxiosData>("/getAllCompanies", {
        offset: this.cards.length,
        limit: this.filters.limit,
      });
      runInAction(() => {
        this.cards.push(...data.companies);
      });
    } catch (e) {
      const error = e as AxiosError;
      runInAction(() => {
        switch (error.response?.status) {
          case 400:
            const data = error.response.data as { message: string };
            this.status = {
              condition: Status.error,
              message: data.message || "Request failed with status code 400",
            };
            break;
          case 401:
            this.status = {
              condition: Status.error,
              message: "Ошибка авторизации",
            };
            break;
          case 500:
            this.status = { condition: Status.error, message: "Все упало" };
            break;
          default:
            throw e;
        }
      });
    }
  }
}

export default new Cards();
