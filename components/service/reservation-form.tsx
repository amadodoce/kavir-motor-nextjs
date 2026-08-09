'use client'

import { useState } from 'react'
import { CheckCircle2, Calendar, Clock, User, Phone, Mail, Bike, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { serviceTypes } from '@/lib/data'

const timeSlots = [
  '۰۸:۰۰',
  '۰۹:۰۰',
  '۱۰:۰۰',
  '۱۱:۰۰',
  '۱۳:۰۰',
  '۱۴:۰۰',
  '۱۵:۰۰',
  '۱۶:۰۰',
]

const brands = ['KTM', 'Kawasaki', 'Husqvarna', 'GASGAS', 'Vespa', 'Aprilia', 'Zontes', 'CFMOTO', 'سایر']

const years = Array.from({ length: 15 }, (_, i) => String(new Date().getFullYear() - i))

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  brand: string
  model: string
  year: string
  serviceType: string
  center: string
  date: string
  timeSlot: string
  notes: string
}

interface ReservationFormProps {
  preSelectedService?: string | null
}

export function ReservationForm({ preSelectedService }: ReservationFormProps) {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    year: '',
    serviceType: preSelectedService ?? '',
    center: '',
    date: '',
    timeSlot: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const set = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.firstName.trim()) newErrors.firstName = 'الزامی'
    if (!form.lastName.trim()) newErrors.lastName = 'الزامی'
    if (!form.phone.trim()) newErrors.phone = 'الزامی'
    if (!form.email.trim()) newErrors.email = 'الزامی'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'ایمیل نامعتبر است'
    if (!form.brand) newErrors.brand = 'الزامی'
    if (!form.model.trim()) newErrors.model = 'الزامی'
    if (!form.serviceType) newErrors.serviceType = 'الزامی'
    if (!form.date) newErrors.date = 'الزامی'
    if (!form.timeSlot) newErrors.timeSlot = 'الزامی'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-xl border border-primary/30 p-8 sm:p-12 text-center shadow-[0_0_40px_oklch(0.62_0.21_37/10%)]">
        <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
          رزرو تایید شد!
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
          با تشکر، <span className="text-foreground font-bold">{form.firstName} {form.lastName}</span>. وقت سرویس شما رزرو شد.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          تاییدیه به <span className="text-foreground" dir="ltr">{form.email}</span> ارسال می‌شود. تیم ما با شماره{' '}
          <span className="text-foreground" dir="ltr">{form.phone}</span> تماس خواهد گرفت.
        </p>

        {/* Summary */}
        <div className="bg-secondary rounded-lg border border-border p-4 text-right space-y-2 mb-6 max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground font-bold">
              {serviceTypes.find((s) => s.id === form.serviceType)?.title ?? form.serviceType}
            </span>
            <span className="text-muted-foreground">نوع سرویس</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground font-bold">{form.brand} {form.model} ({form.year})</span>
            <span className="text-muted-foreground">موتورسیکلت</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground font-bold">{form.date} ساعت {form.timeSlot}</span>
            <span className="text-muted-foreground">تاریخ و ساعت</span>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false)
            setForm({
              firstName: '', lastName: '', phone: '', email: '',
              brand: '', model: '', year: '', serviceType: preSelectedService ?? '',
              center: '', date: '', timeSlot: '', notes: '',
            })
          }}
          className="px-5 py-2.5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors text-sm"
        >
          رزرو جدید
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="bg-card rounded-xl border border-border p-6 sm:p-8 space-y-8">
        {/* Section: Personal info */}
        <fieldset>
          <legend className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">۱</div>
            <span className="text-foreground font-bold">اطلاعات شخصی</span>
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="نام"
              icon={User}
              value={form.firstName}
              onChange={(v) => set('firstName', v)}
              error={errors.firstName}
              placeholder="علی"
            />
            <InputField
              label="نام خانوادگی"
              icon={User}
              value={form.lastName}
              onChange={(v) => set('lastName', v)}
              error={errors.lastName}
              placeholder="محمدی"
            />
            <InputField
              label="شماره موبایل"
              icon={Phone}
              value={form.phone}
              onChange={(v) => set('phone', v)}
              error={errors.phone}
              placeholder="۰۹۱۲۰۰۰۰۰۰۰"
              type="tel"
              dir="ltr"
            />
            <InputField
              label="آدرس ایمیل"
              icon={Mail}
              value={form.email}
              onChange={(v) => set('email', v)}
              error={errors.email}
              placeholder="ali@example.com"
              type="email"
              dir="ltr"
            />
          </div>
        </fieldset>

        <div className="h-px bg-border" />

        {/* Section: Vehicle info */}
        <fieldset>
          <legend className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">۲</div>
            <span className="text-foreground font-bold">مشخصات موتورسیکلت</span>
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SelectField
              label="برند"
              icon={Bike}
              value={form.brand}
              onChange={(v) => set('brand', v)}
              error={errors.brand}
              options={brands}
              placeholder="انتخاب برند"
            />
            <InputField
              label="مدل"
              icon={Bike}
              value={form.model}
              onChange={(v) => set('model', v)}
              error={errors.model}
              placeholder="مثلاً SX-F 249"
            />
            <SelectField
              label="سال ساخت"
              icon={Calendar}
              value={form.year}
              onChange={(v) => set('year', v)}
              options={years}
              placeholder="انتخاب سال"
            />
          </div>
        </fieldset>

        <div className="h-px bg-border" />

        {/* Section: Service type */}
        <fieldset>
          <legend className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">۳</div>
            <span className="text-foreground font-bold">جزئیات سرویس</span>
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField
              label="نوع سرویس"
              icon={ChevronDown}
              value={form.serviceType}
              onChange={(v) => set('serviceType', v)}
              error={errors.serviceType}
              options={serviceTypes.map((s) => s.title)}
              optionValues={serviceTypes.map((s) => s.id)}
              placeholder="انتخاب سرویس"
            />
            <SelectField
              label="مرکز سرویس"
              icon={ChevronDown}
              value={form.center}
              onChange={(v) => set('center', v)}
              options={['تهران مرکزی', 'اصفهان', 'مشهد']}
              placeholder="انتخاب مرکز"
            />
          </div>
        </fieldset>

        <div className="h-px bg-border" />

        {/* Section: Date & time */}
        <fieldset>
          <legend className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">۴</div>
            <span className="text-foreground font-bold">زمان‌بندی مورد نظر</span>
          </legend>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-xs font-bold text-muted-foreground mb-1.5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> تاریخ مورد نظر
              </span>
            </label>
            <input
              type="date"
              value={form.date}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => set('date', e.target.value)}
              className={cn(
                'w-full sm:w-64 px-4 py-2.5 bg-secondary border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors',
                errors.date ? 'border-destructive' : 'border-border'
              )}
              dir="ltr"
            />
            {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
          </div>

          {/* Time slots */}
          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> ساعت مورد نظر
              </span>
            </label>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => set('timeSlot', slot)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-bold border transition-all duration-150',
                    form.timeSlot === slot
                      ? 'bg-primary text-white border-primary shadow-[0_0_10px_oklch(0.62_0.21_37/30%)]'
                      : 'bg-secondary border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
            {errors.timeSlot && <p className="text-destructive text-xs mt-1">{errors.timeSlot}</p>}
          </div>
        </fieldset>

        <div className="h-px bg-border" />

        {/* Notes */}
        <div>
          <label className="block text-xs font-bold text-muted-foreground mb-1.5">
            توضیحات تکمیلی (اختیاری)
          </label>
          <textarea
            rows={3}
            value={form.notes}
            onChange={(e) => set('notes', e.target.value)}
            placeholder="مشکلات خاص یا درخواست‌های ویژه را بنویسید..."
            className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-black rounded-lg hover:bg-primary/90 transition-colors text-sm tracking-wide"
        >
          تایید رزرو
        </button>
      </div>
    </form>
  )
}

/* ——— Helpers ——— */

interface InputFieldProps {
  label: string
  icon: React.ComponentType<{ className?: string }>
  value: string
  onChange: (v: string) => void
  error?: string
  placeholder?: string
  type?: string
  dir?: string
}

function InputField({ label, icon: Icon, value, onChange, error, placeholder, type = 'text', dir }: InputFieldProps) {
  return (
    <div>
      <label className="block text-xs font-bold text-muted-foreground mb-1.5">
        <span className="flex items-center gap-1.5">
          <Icon className="w-3.5 h-3.5" /> {label}
        </span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        dir={dir}
        className={cn(
          'w-full px-4 py-2.5 bg-secondary border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors',
          error ? 'border-destructive' : 'border-border'
        )}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  )
}

interface SelectFieldProps {
  label: string
  icon: React.ComponentType<{ className?: string }>
  value: string
  onChange: (v: string) => void
  error?: string
  options: string[]
  optionValues?: string[]
  placeholder?: string
}

function SelectField({ label, icon: Icon, value, onChange, error, options, optionValues, placeholder }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-xs font-bold text-muted-foreground mb-1.5">
        <span className="flex items-center gap-1.5">
          <Icon className="w-3.5 h-3.5" /> {label}
        </span>
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            'w-full appearance-none px-4 py-2.5 bg-secondary border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors pl-9',
            error ? 'border-destructive' : 'border-border',
            !value && 'text-muted-foreground'
          )}
        >
          <option value="" disabled>
            {placeholder ?? 'انتخاب کنید...'}
          </option>
          {options.map((opt, idx) => (
            <option key={opt} value={optionValues ? optionValues[idx] : opt} className="bg-card text-foreground">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  )
}
