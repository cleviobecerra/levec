'use client'

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface FilterOptions {
    businessUnits: string[]
    subAreas: string[]
    years: string[]
    months: string[]
    days: string[]
}

interface AnalyticsFiltersProps {
    options: FilterOptions
    filters: {
        year?: string
        month?: string
        day?: string
        businessUnit?: string
        subArea?: string
    }
    onChange: (key: string, value: any) => void
}

const MONTH_NAMES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

export function AnalyticsFilters({ options, filters, onChange }: AnalyticsFiltersProps) {
    return (
        <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg border shadow-sm items-end">
            <div className="space-y-2 w-full md:w-[120px]">
                <label className="text-sm font-medium text-slate-700">Año</label>
                <Select value={filters.year || 'all'} onValueChange={(val) => onChange('year', val === 'all' ? undefined : val)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Año" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        {options.years?.map(y => (
                            <SelectItem key={y} value={y}>{y}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2 w-full md:w-[150px]">
                <label className="text-sm font-medium text-slate-700">Mes</label>
                <Select
                    value={filters.month || 'all'}
                    onValueChange={(val) => onChange('month', val === 'all' ? undefined : val)}
                    disabled={!filters.year}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={!filters.year ? "Sel. Año" : "Mes"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        {options.months?.map(m => (
                            <SelectItem key={m} value={m}>{MONTH_NAMES[parseInt(m) - 1]}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2 w-full md:w-[120px]">
                <label className="text-sm font-medium text-slate-700">Fecha</label>
                <Select
                    value={filters.day || 'all'}
                    onValueChange={(val) => onChange('day', val === 'all' ? undefined : val)}
                    disabled={!filters.month}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={!filters.month ? "Sel. Mes" : "Día"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        {options.days?.map(d => (
                            <SelectItem key={d} value={d}>{d.padStart(2, '0')}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2 w-full md:w-[200px]">
                <label className="text-sm font-medium text-slate-700">U. Negocio</label>
                <Select value={filters.businessUnit} onValueChange={(val) => onChange('businessUnit', val)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        {options.businessUnits.map(u => (
                            <SelectItem key={u} value={u}>{u}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2 w-full md:w-[200px]">
                <label className="text-sm font-medium text-slate-700">Sub-Área</label>
                <Select value={filters.subArea} onValueChange={(val) => onChange('subArea', val)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        {options.subAreas.map(a => (
                            <SelectItem key={a} value={a}>{a}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Button variant="ghost" size="sm" className="mb-0.5" onClick={() => {
                onChange('year', undefined)
                onChange('month', undefined)
                onChange('day', undefined)
                onChange('businessUnit', 'all')
                onChange('subArea', 'all')
            }}>
                Limpiar
            </Button>
        </div>
    )
}
