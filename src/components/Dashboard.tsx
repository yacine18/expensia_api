import { useState } from 'react';
import {
    TrendingUp,
    TrendingDown,
    DollarSign,
    CreditCard,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    User,
    Mail,
    Phone,
    LogOut,
    Search,
    Plus,
} from 'lucide-react';

interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: 'income' | 'expense';
    category: string;
    date: string;
    icon: string;
}

interface DashboardProps {
    onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const totalIncome = 12450.0;
    const totalExpense = 8234.5;
    const balance = totalIncome - totalExpense;

    const transactions: Transaction[] = [
        {
            id: '1',
            title: 'Salary Deposit',
            amount: 5000.0,
            type: 'income',
            category: 'Salary',
            date: '2024-12-01',
            icon: '💰',
        },
        {
            id: '2',
            title: 'Grocery Shopping',
            amount: 234.5,
            type: 'expense',
            category: 'Food',
            date: '2024-12-03',
            icon: '🛒',
        },
        {
            id: '3',
            title: 'Freelance Project',
            amount: 1200.0,
            type: 'income',
            category: 'Freelance',
            date: '2024-12-04',
            icon: '💼',
        },
        {
            id: '4',
            title: 'Electric Bill',
            amount: 156.0,
            type: 'expense',
            category: 'Utilities',
            date: '2024-12-05',
            icon: '⚡',
        },
        {
            id: '5',
            title: 'Netflix Subscription',
            amount: 15.99,
            type: 'expense',
            category: 'Entertainment',
            date: '2024-12-05',
            icon: '🎬',
        },
        {
            id: '6',
            title: 'Investment Dividend',
            amount: 450.0,
            type: 'income',
            category: 'Investment',
            date: '2024-12-06',
            icon: '📈',
        },
        {
            id: '7',
            title: 'Restaurant Dinner',
            amount: 87.5,
            type: 'expense',
            category: 'Food',
            date: '2024-12-07',
            icon: '🍽️',
        },
        {
            id: '8',
            title: 'Gym Membership',
            amount: 50.0,
            type: 'expense',
            category: 'Health',
            date: '2024-12-08',
            icon: '🏋️',
        },
    ];

    const filteredTransactions = transactions.filter((transaction) =>
        transaction.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Expensia</h1>
                                <p className="text-xs text-gray-500">Manage your finances</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={onLogout}
                                className="flex cursor-pointer items-center space-x-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="text-sm font-medium">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-emerald-100 rounded-xl">
                                        <TrendingUp className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                        +12.5%
                                    </span>
                                </div>
                                <h3 className="text-sm font-medium text-gray-600 mb-1">Total Income</h3>
                                <p className="text-2xl font-bold text-gray-900">
                                    ${totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </p>
                                <p className="text-xs text-gray-500 mt-2">This month</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-red-100 rounded-xl">
                                        <TrendingDown className="w-6 h-6 text-red-600" />
                                    </div>
                                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                                        +8.3%
                                    </span>
                                </div>
                                <h3 className="text-sm font-medium text-gray-600 mb-1">Total Expenses</h3>
                                <p className="text-2xl font-bold text-gray-900">
                                    ${totalExpense.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </p>
                                <p className="text-xs text-gray-500 mt-2">This month</p>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                        <CreditCard className="w-6 h-6 text-white" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-white/80" />
                                </div>
                                <h3 className="text-sm font-medium text-white/90 mb-1">Balance</h3>
                                <p className="text-2xl font-bold">
                                    ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </p>
                                <p className="text-xs text-white/80 mt-2">Available funds</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
                                    <p className="text-sm text-gray-500">Your latest financial activities</p>
                                </div>
                                <button className="px-4 py-2 bg-emerald-50 cursor-pointer text-sm font-medium text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors">
                                    <Plus className="w-4 h-3 mr-1 inline-block" />
                                    Add Transaction
                                </button>
                            </div>

                            <div className="mb-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search transactions..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 max-h-[500px] overflow-y-auto">
                                {filteredTransactions.map((transaction) => (
                                    <div
                                        key={transaction.id}
                                        className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                                                {transaction.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{transaction.title}</h4>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <span className="text-xs text-gray-500">{transaction.category}</span>
                                                    <span className="text-xs text-gray-400">•</span>
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        {new Date(transaction.date).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="text-right">
                                                <p
                                                    className={`font-bold ${transaction.type === 'income' ? 'text-emerald-600' : 'text-red-600'
                                                        }`}
                                                >
                                                    {transaction.type === 'income' ? '+' : '-'}$
                                                    {transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                                </p>
                                                <p className="text-xs text-gray-500 capitalize">{transaction.type}</p>
                                            </div>
                                            {transaction.type === 'income' ? (
                                                <ArrowUpRight className="w-5 h-5 text-emerald-600" />
                                            ) : (
                                                <ArrowDownRight className="w-5 h-5 text-red-600" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-gray-900">Profile</h2>
                                <button className="text-sm cursor-pointer text-emerald-600 hover:text-emerald-700 font-medium">
                                    Edit
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-col items-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                                            <User className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold text-gray-900">John Doe</h3>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-gray-100">
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-emerald-50 rounded-lg">
                                            <Mail className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500 mb-1">Email Address</p>
                                            <p className="text-sm font-medium text-gray-900">john.doe@example.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-emerald-50 rounded-lg">
                                            <Phone className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500 mb-1">Phone Number</p>
                                            <p className="text-sm font-medium text-gray-900">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-emerald-50 rounded-lg">
                                            <Calendar className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500 mb-1">Member Since</p>
                                            <p className="text-sm font-medium text-gray-900">January 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}