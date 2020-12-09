// ========================================================
// COMPANY
// ========================================================

export interface Company {
	id_user: string;
	tx_company_name: string;
	tx_company_slogan: string;
	tx_company_string: string;
	tx_company_location: string;
	cd_company_location: string;
    tx_company_lat: string;
    tx_company_lng: string;
    tx_address_street: string;
    tx_address_number: string;
	__v?: number;
	_id?: string;
}

export interface CompanyResponse {
	ok: boolean;
	msg: string;
	company: Company | null;
}

export interface CompaniesResponse {
	ok: boolean;
	msg: string;
	companies: Company[] | null;
}