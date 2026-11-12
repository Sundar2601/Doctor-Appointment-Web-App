export type ApptStatus = 'Scheduled' | 'Completed' | 'Cancelled'

export interface Hospital {
  id: string
  name: string
  area: string
  type: 'General' | 'Specialty' | 'Teaching' | 'Women & Children' | 'Eye'
  ownership: 'Government' | 'Private' | 'Trust'
  emergency: boolean
}

export interface Doctor {
  id: string
  hospitalId: string
  name: string
  specialty: string
  days: number[] // 0 = Sunday
  startHour: number
  endHour: number
  fee: number
}

export const DEMO_EMAIL = 'demo@pondyhealth.in'

export interface Appointment {
  id: string
  /** Email of the account that booked it; users only ever see their own. */
  owner: string
  patient: string
  doctorId: string
  date: string // YYYY-MM-DD
  time: string // HH:mm
  reason: string
  status: ApptStatus
}

// Well-known hospitals of the Union Territory of Puducherry (Puducherry, Karaikal, Mahé, Yanam).
// Not exhaustive; emergency flags are indicative. Verify before relying on them.
export const HOSPITALS: Hospital[] = [
  { id: 'h1', name: 'JIPMER', area: 'Puducherry – Gorimedu', type: 'Teaching', ownership: 'Government', emergency: true },
  { id: 'h2', name: 'Indira Gandhi Govt. General Hospital & PG Institute', area: 'Puducherry – Town', type: 'General', ownership: 'Government', emergency: true },
  { id: 'h3', name: 'Rajiv Gandhi Women & Children Hospital', area: 'Ellapillaichavady', type: 'Women & Children', ownership: 'Government', emergency: true },
  { id: 'h4', name: 'Pondicherry Institute of Medical Sciences (PIMS)', area: 'Kalapet', type: 'Teaching', ownership: 'Private', emergency: true },
  { id: 'h5', name: 'Mahatma Gandhi Medical College & Research Institute', area: 'Pillaiyarkuppam', type: 'Teaching', ownership: 'Private', emergency: true },
  { id: 'h6', name: 'Sri Manakula Vinayagar Medical College & Hospital', area: 'Kalitheerthalkuppam', type: 'Teaching', ownership: 'Private', emergency: true },
  { id: 'h7', name: 'Sri Venkateshwaraa Medical College Hospital', area: 'Ariyur', type: 'Teaching', ownership: 'Private', emergency: true },
  { id: 'h8', name: 'Aravind Eye Hospital', area: 'Thavalakuppam', type: 'Eye', ownership: 'Trust', emergency: false },
  { id: 'h9', name: 'Govt. General Hospital, Karaikal', area: 'Karaikal', type: 'General', ownership: 'Government', emergency: true },
  { id: 'h10', name: 'Govt. General Hospital, Mahé', area: 'Mahé', type: 'General', ownership: 'Government', emergency: true },
  { id: 'h11', name: 'Govt. General Hospital, Yanam', area: 'Yanam', type: 'General', ownership: 'Government', emergency: true },
  { id: 'h12', name: 'Be Well Hospitals', area: 'Kottupalayam', type: 'General', ownership: 'Private', emergency: true },
  { id: 'h13', name: 'East Coast Hospitals', area: 'Brindavan Colony', type: 'General', ownership: 'Private', emergency: true },
  { id: 'h14', name: 'Senthil Speciality Hospital', area: 'MG Road', type: 'Specialty', ownership: 'Private', emergency: true },
  { id: 'h15', name: 'The POSH – Pondy Ortho Speciality Hospital', area: 'Ratna Nagar', type: 'Specialty', ownership: 'Private', emergency: true },
  { id: 'h16', name: 'Puducherry Cancer Trust Hospital & Research Centre', area: 'Thavalakuppam', type: 'Specialty', ownership: 'Trust', emergency: false },
  { id: 'h17', name: 'Aarupadai Veedu Medical College & Hospital', area: 'Kirumampakkam', type: 'Teaching', ownership: 'Private', emergency: true },
  { id: 'h18', name: 'Sri Lakshmi Narayana Institute of Medical Sciences', area: 'Puducherry', type: 'Teaching', ownership: 'Private', emergency: true },
  { id: 'h19', name: 'ESI Hospital', area: 'Puducherry – Gorimedu', type: 'General', ownership: 'Government', emergency: false },
  { id: 'h20', name: 'KS Hospital', area: 'Karaikal', type: 'General', ownership: 'Private', emergency: false },
  { id: 'h21', name: 'Dr Agarwals Eye Hospital', area: 'Kamarajar Salai', type: 'Eye', ownership: 'Private', emergency: false },
  { id: 'h22', name: 'GL Hospital', area: 'Near Railway Station', type: 'General', ownership: 'Private', emergency: true },
  { id: 'h23', name: 'Kidney Centre Hospital', area: 'Puducherry', type: 'Specialty', ownership: 'Private', emergency: false },
  { id: 'h24', name: "A.G. Padmavati's Hospital", area: 'Moolakulam', type: 'General', ownership: 'Private', emergency: true },
  { id: 'h25', name: 'AUM Hospitals', area: 'Muthialpet', type: 'General', ownership: 'Private', emergency: true },
  { id: 'h26', name: 'Auromed Hospitals', area: 'Muthialpet', type: 'General', ownership: 'Private', emergency: true },
  { id: 'h27', name: 'Dakshin Women Care Hospital & Fertility Centre', area: 'Lawspet', type: 'Women & Children', ownership: 'Private', emergency: false },
  { id: 'h28', name: 'L K Nursing Home', area: 'Lawspet', type: 'General', ownership: 'Private', emergency: false },
  { id: 'h29', name: 'Gem Hospital', area: 'Lawspet', type: 'General', ownership: 'Private', emergency: false },
  { id: 'h30', name: 'V.R. Medical Centre', area: 'Karuvadikuppam', type: 'General', ownership: 'Private', emergency: false },
  { id: 'h31', name: 'Sri Sai Krupa Hospital', area: 'Ariyankuppam', type: 'General', ownership: 'Private', emergency: false },
  { id: 'h32', name: 'Sri Krishna Nursing Home', area: 'Puducherry', type: 'General', ownership: 'Private', emergency: false },
  { id: 'h33', name: 'Sri Mahalakshmi Nursing Home', area: 'Puducherry', type: 'General', ownership: 'Private', emergency: false },
  { id: 'h34', name: 'Ashwini Maternity Hospital', area: 'Puducherry', type: 'Women & Children', ownership: 'Private', emergency: false },
]

export const AREAS = [...new Set(HOSPITALS.map((h) => h.area))]

// Doctors and timings are fictional demo data (not real staff).
export const DOCTORS: Doctor[] = [
  { id: 'd1', hospitalId: 'h2', name: 'Dr. Asha Menon', specialty: 'General Medicine', days: [1, 2, 3, 4, 5], startHour: 9, endHour: 16, fee: 0 },
  { id: 'd2', hospitalId: 'h1', name: 'Dr. Liam Carter', specialty: 'Cardiology', days: [1, 3, 5], startHour: 10, endHour: 15, fee: 0 },
  { id: 'd3', hospitalId: 'h4', name: 'Dr. Priya Nair', specialty: 'Dermatology', days: [2, 4], startHour: 9, endHour: 14, fee: 400 },
  { id: 'd4', hospitalId: 'h3', name: 'Dr. Tomás Rivera', specialty: 'Pediatrics', days: [1, 2, 3, 4], startHour: 8, endHour: 13, fee: 0 },
  { id: 'd5', hospitalId: 'h1', name: 'Dr. Grace Okafor', specialty: 'Neurology', days: [2, 3, 5], startHour: 9, endHour: 15, fee: 0 },
  { id: 'd6', hospitalId: 'h5', name: 'Dr. Henry Zhao', specialty: 'Orthopedics', days: [1, 4], startHour: 10, endHour: 16, fee: 500 },
  { id: 'd7', hospitalId: 'h6', name: 'Dr. Meera Iyer', specialty: 'General Medicine', days: [1, 2, 3, 4, 5, 6], startHour: 8, endHour: 14, fee: 300 },
  { id: 'd8', hospitalId: 'h8', name: 'Dr. Daniel Brooks', specialty: 'Ophthalmology', days: [1, 2, 3, 4, 5], startHour: 8, endHour: 12, fee: 150 },
  { id: 'd9', hospitalId: 'h9', name: 'Dr. Kavya Raman', specialty: 'General Medicine', days: [1, 2, 3, 4, 5], startHour: 9, endHour: 13, fee: 0 },
  { id: 'd10', hospitalId: 'h7', name: 'Dr. Arjun Pillai', specialty: 'ENT', days: [2, 4, 6], startHour: 10, endHour: 14, fee: 350 },
]

export function toIsoDate(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

export function addDays(offset: number): string {
  const d = new Date()
  d.setDate(d.getDate() + offset)
  return toIsoDate(d)
}

export function money(n: number): string {
  return n === 0 ? 'Free / govt. rate' : new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
}

export const SEED_APPOINTMENTS: Appointment[] = [
  { id: 'A-1001', owner: DEMO_EMAIL, patient: 'Maya Thompson', doctorId: 'd1', date: addDays(-3), time: '09:30', reason: 'Annual check-up', status: 'Completed' },
  { id: 'A-1002', owner: DEMO_EMAIL, patient: 'Noah Williams', doctorId: 'd2', date: addDays(-1), time: '11:00', reason: 'Chest pain follow-up', status: 'Completed' },
  { id: 'A-1003', owner: DEMO_EMAIL, patient: 'Olivia Brown', doctorId: 'd3', date: addDays(1), time: '10:00', reason: 'Skin rash', status: 'Scheduled' },
  { id: 'A-1004', owner: DEMO_EMAIL, patient: 'Ethan Davis', doctorId: 'd4', date: addDays(1), time: '08:30', reason: 'Vaccination', status: 'Scheduled' },
  { id: 'A-1005', owner: DEMO_EMAIL, patient: 'Sophia Martin', doctorId: 'd1', date: addDays(2), time: '14:00', reason: 'Flu symptoms', status: 'Scheduled' },
  { id: 'A-1006', owner: DEMO_EMAIL, patient: 'Lucas Garcia', doctorId: 'd2', date: addDays(3), time: '12:00', reason: 'ECG', status: 'Scheduled' },
  { id: 'A-1007', owner: DEMO_EMAIL, patient: 'Isabella Lee', doctorId: 'd3', date: addDays(4), time: '09:00', reason: 'Acne consultation', status: 'Cancelled' },
]
