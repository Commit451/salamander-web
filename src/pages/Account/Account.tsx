import React, {useEffect, useState} from 'react';
import './Account.css';
import {useAuth} from '../../contexts/AuthContext';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {getPlansFromFirestore, Plan, getRunnersFromFirestore, Runner} from '../../services/userService';
import {RunnerApiService, ApiError} from '../../services/apiService';

const Account: React.FC = () => {
    const {user, logout, refreshUserData} = useAuth();
    const [plans, setPlans] = useState<Plan[]>([]);
    const [isLoadingPlans, setIsLoadingPlans] = useState(true);
    const [runners, setRunners] = useState<Runner[]>([]);
    const [isLoadingRunners, setIsLoadingRunners] = useState(true);
    const [editingRunner, setEditingRunner] = useState<string | null>(null);
    const [editingName, setEditingName] = useState('');

    useEffect(() => {
        // Load plans and refresh user data when component loads
        const loadData = async () => {
            try {
                const [plansData] = await Promise.all([
                    getPlansFromFirestore(),
                    refreshUserData()
                ]);
                setPlans(plansData);
            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setIsLoadingPlans(false);
            }
        };

        loadData().catch(console.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Remove refreshUserData from dependencies to prevent infinite loop

    useEffect(() => {
        const loadRunners = async () => {
            if (!user) return;

            try {
                const runnersData = await getRunnersFromFirestore(user.id);
                setRunners(runnersData);
            } catch (error) {
                console.error('Error loading runners:', error);
            } finally {
                setIsLoadingRunners(false);
            }
        };

        loadRunners();
    }, [user]);

    const signOut = () => {
        logout();
    };

    const getPlanById = (planId: string): Plan | null => {
        return plans.find((plan) => plan.id === planId) || null;
    };

    const getTierColor = (tier: string): string => {
        switch (tier) {
            case 'free':
                return '#6b7280';
            case 'premium':
                return '#2563eb';
            case 'unlimited':
                return '#7c3aed';
            default:
                return '#6b7280';
        }
    };

    const getUsageColor = (usagePercent: number): string => {
        if (usagePercent < 0.5) return '#10b981';
        if (usagePercent < 0.8) return '#f59e0b';
        return '#ef4444';
    };

    const getUsageText = (usagePercent: number): string => {
        if (usagePercent < 0.5) return 'Great! You have plenty of messages left.';
        if (usagePercent < 0.8) return 'You\'re using your messages steadily.';
        if (usagePercent < 1.0) return 'Running low on messages.';
        return 'You\'ve used all your daily messages.';
    };

    const handleSignOut = () => {
        const confirmed = window.confirm('Are you sure you want to sign out?');
        if (confirmed) {
            signOut();
        }
    };

    const handleRenameRunner = async (runnerId: string, newName: string) => {
        try {
            // Use the new API service that matches CLI pattern
            await RunnerApiService.updateRunnerName(runnerId, newName);
            setRunners(runners.map(runner =>
                runner.id === runnerId
                    ? { ...runner, name: newName }
                    : runner
            ));
            setEditingRunner(null);
            setEditingName('');
        } catch (error) {
            console.error('Error renaming runner:', error);

            // Provide more specific error messages
            if (error instanceof ApiError) {
                alert(`Failed to rename runner: ${error.message}`);
            } else {
                alert('Failed to rename runner. Please try again.');
            }
        }
    };

    const handleDeleteRunner = async (runnerId: string, runnerName: string) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${runnerName}"? This action cannot be undone.`
        );
        if (confirmed) {
            try {
                // Use the new API service that matches CLI and Flutter pattern
                await RunnerApiService.deleteRunner(runnerId);
                setRunners(runners.filter(runner => runner.id !== runnerId));
            } catch (error) {
                console.error('Error deleting runner:', error);

                // Provide more specific error messages
                if (error instanceof ApiError) {
                    alert(`Failed to delete runner: ${error.message}`);
                } else {
                    alert('Failed to delete runner. Please try again.');
                }
            }
        }
    };

    const startEditingRunner = (runner: Runner) => {
        setEditingRunner(runner.id);
        setEditingName(runner.name);
    };

    const cancelEditingRunner = () => {
        setEditingRunner(null);
        setEditingName('');
    };


    if (!user) {
        return null; // This should not happen since App component handles redirects
    }

    if (isLoadingPlans || isLoadingRunners) {
        return (
            <div className="account-container">
                <Header isSubpage={true}/>
                <div className="account-content" style={{paddingTop: '6rem'}}>
                    {/* User Card Skeleton */}
                    <div className="account-card user-card skeleton">
                        <div className="user-info">
                            <div className="skeleton-avatar"></div>
                            <div className="user-details">
                                <div className="skeleton-line skeleton-title"></div>
                                <div className="skeleton-line skeleton-subtitle"></div>
                            </div>
                        </div>
                    </div>

                    {/* Usage Card Skeleton */}
                    <div className="account-card usage-card skeleton">
                        <div className="card-header">
                            <div className="skeleton-icon"></div>
                            <div className="skeleton-line skeleton-header"></div>
                        </div>
                        <div className="skeleton-content">
                            <div className="skeleton-line"></div>
                            <div className="skeleton-bar"></div>
                            <div className="skeleton-line skeleton-small"></div>
                        </div>
                    </div>

                    {/* Plans Card Skeleton */}
                    <div className="account-card plans-card skeleton">
                        <div className="card-header">
                            <div className="skeleton-icon"></div>
                            <div className="skeleton-line skeleton-header"></div>
                        </div>
                        <div className="skeleton-plans">
                            <div className="skeleton-plan">
                                <div className="skeleton-line skeleton-plan-name"></div>
                                <div className="skeleton-line skeleton-plan-desc"></div>
                                <div className="skeleton-button"></div>
                            </div>
                            <div className="skeleton-plan">
                                <div className="skeleton-line skeleton-plan-name"></div>
                                <div className="skeleton-line skeleton-plan-desc"></div>
                                <div className="skeleton-button"></div>
                            </div>
                        </div>
                    </div>

                    {/* Runners Card Skeleton */}
                    <div className="account-card runners-card skeleton">
                        <div className="card-header">
                            <div className="skeleton-icon"></div>
                            <div className="skeleton-line skeleton-header"></div>
                        </div>
                        <div className="skeleton-content">
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line skeleton-small"></div>
                        </div>
                    </div>

                    {/* Enterprise Card Skeleton */}
                    <div className="account-card enterprise-card skeleton">
                        <div className="card-header">
                            <div className="skeleton-icon"></div>
                            <div className="skeleton-line skeleton-header"></div>
                        </div>
                        <div className="skeleton-content">
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-button"></div>
                        </div>
                    </div>

                    {/* Sign Out Card Skeleton */}
                    <div className="account-card signout-card skeleton">
                        <div className="card-header">
                            <div className="skeleton-icon"></div>
                            <div className="skeleton-line skeleton-header"></div>
                        </div>
                        <div className="skeleton-content">
                            <div className="skeleton-line"></div>
                            <div className="skeleton-button"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const plan = getPlanById(user.tier);
    if (!plan) {
        return (
            <div className="account-container">
                <Header isSubpage={true}/>
                <div className="account-content" style={{paddingTop: '6rem'}}>
                    <div style={{padding: '20px', textAlign: 'center', color: 'red'}}>
                        Error: Plan not found
                    </div>
                </div>
            </div>
        );
    }

    const isUnlimited = plan.messageLimit === -1;
    const usagePercent = isUnlimited
        ? 0.0
        : plan.messageLimit > 0 ? (plan.messageLimit - user.remainingMessages) / plan.messageLimit : 0;

    return (
        <div className="account-container">
            <Header isSubpage={true}/>
            <div className="account-content" style={{paddingTop: '6rem'}}>
                {/* User Header Card */}
                <div className="account-card user-card">
                    <div className="user-info">
                        <div className="user-avatar">
                            {user.picture ? (
                                <img src={user.picture} alt="Profile" className="user-avatar-image"/>
                            ) : (
                                <span>{user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}</span>
                            )}
                        </div>
                        <div className="user-details">
                            <h2>{user.displayName || 'User'}</h2>
                            <p className="user-email">{user.email}</p>
                        </div>
                    </div>
                </div>

                {/* Usage Card */}
                <div className="account-card usage-card">
                    <div className="card-header">
                        <div className="card-icon">📊</div>
                        <h3>Daily Usage</h3>
                    </div>
                    <div className="usage-info">
                        {isUnlimited ? (
                            <div className="unlimited-usage">
                                <div className="unlimited-icon">∞</div>
                                <p className="unlimited-text">Unlimited Messages</p>
                            </div>
                        ) : (
                            <div className="limited-usage">
                                <div className="usage-stats">
                                    <span className="usage-label">Messages Remaining</span>
                                    <span className="usage-count">
                    {user.remainingMessages}/{plan.messageLimit}
                  </span>
                                </div>
                                <div className="usage-bar">
                                    <div
                                        className="usage-fill"
                                        style={{
                                            width: `${usagePercent * 100}%`,
                                            backgroundColor: getUsageColor(usagePercent)
                                        }}
                                    ></div>
                                </div>
                                <p className="usage-text">{getUsageText(usagePercent)}</p>
                            </div>
                        )}
                        <div className="reset-info">
                            <span className="reset-icon">🔄</span>
                            <span className="reset-text">Resets daily at 9am UTC</span>
                        </div>
                    </div>
                </div>

                {/* Available Plans Card */}
                <div className="account-card plans-card">
                    <div className="card-header">
                        <div className="card-icon">💎</div>
                        <h3>Plans</h3>
                    </div>
                    <div className="plans-list">
                        {plans.map((planOption) => {
                            const isCurrentPlan = planOption.id === user.tier;
                            const planPrice = planOption.priceInCents === 0 ? 'Free' : `$${(planOption.priceInCents / 100).toFixed(2)}/month`;
                            const messageText = planOption.messageLimit === -1 ? 'Unlimited messages' : `${planOption.messageLimit} messages per day`;

                            return (
                                <div
                                    key={planOption.id}
                                    className={`plan-option ${isCurrentPlan ? 'current-plan' : ''}`}
                                    style={{
                                        border: isCurrentPlan ? `2px solid ${getTierColor(planOption.id)}` : '1px solid #e5e7eb',
                                        backgroundColor: isCurrentPlan ? getTierColor(planOption.id) + '0a' : 'transparent'
                                    }}
                                >
                                    <div className="plan-header">
                                        <div className="plan-name-price">
                                            <h4 className="plan-name">{planOption.name}</h4>
                                            <span className="plan-price-badge">{planPrice}</span>
                                        </div>
                                        {isCurrentPlan && (
                                            <span className="current-badge"
                                                  style={{color: getTierColor(planOption.id)}}>
                        Current Plan
                      </span>
                                        )}
                                    </div>
                                    <p className="plan-tagline">{planOption.tagline}</p>
                                    <div className="plan-features">
                                        <div className="plan-feature">
                                            <span className="feature-icon">💬</span>
                                            <span className="feature-text">{messageText}</span>
                                        </div>
                                        <div className="plan-feature">
                                            <span className="feature-icon">🏃</span>
                                            <span className="feature-text">{planOption.runnerLimit} runners</span>
                                        </div>
                                    </div>
                                    {!isCurrentPlan && (
                                        <button
                                            className="upgrade-button"
                                            style={{
                                                backgroundColor: getTierColor(planOption.id),
                                                borderColor: getTierColor(planOption.id)
                                            }}
                                            onClick={() => {
                                                if (planOption.id === 'pro') {
                                                    window.open('https://buy.stripe.com/00w9AU6UNei60rlbMreIw00', '_blank');
                                                } else {
                                                    alert('Plan upgrade functionality coming soon!');
                                                }
                                            }}
                                        >
                                            {planOption.priceInCents === 0 ? 'Downgrade' : 'Upgrade'} to {planOption.name}
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Runners Card */}
                <div className="account-card runners-card">
                    <div className="card-header">
                        <div className="card-icon">🏃</div>
                        <h3>My Runners</h3>
                    </div>
                    <div className="runners-info">
                        {runners.length === 0 ? (
                            <div className="no-runners">
                                <p className="no-runners-text">
                                    You don't have any runners yet. Create one using the CLI:
                                </p>
                                <code className="cli-command">salamander create</code>
                            </div>
                        ) : (
                            <div className="runners-list">
                                {runners.map((runner) => (
                                    <div key={runner.id} className="runner-item">
                                        <div className="runner-info">
                                            <div className="runner-details">
                                                {editingRunner === runner.id ? (
                                                    <div className="runner-edit">
                                                        <input
                                                            type="text"
                                                            value={editingName}
                                                            onChange={(e) => setEditingName(e.target.value)}
                                                            className="runner-name-input"
                                                            placeholder="Runner name"
                                                        />
                                                        <div className="runner-edit-actions">
                                                            <button
                                                                className="save-button"
                                                                onClick={() => handleRenameRunner(runner.id, editingName)}
                                                                disabled={!editingName.trim()}
                                                            >
                                                                Save
                                                            </button>
                                                            <button
                                                                className="cancel-button"
                                                                onClick={cancelEditingRunner}
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <h4 className="runner-name">{runner.name}</h4>
                                                        {runner.directory && (
                                                            <p className="runner-path">{runner.directory}</p>
                                                        )}
                                                        {runner.machineName && (
                                                            <p className="runner-machine">Machine: {runner.machineName}</p>
                                                        )}
                                                        {runner.lastSeen && (
                                                            <p className="runner-last-seen">
                                                                Last seen: {runner.lastSeen.toLocaleString()}
                                                            </p>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        {editingRunner !== runner.id && (
                                            <div className="runner-actions">
                                                <button
                                                    className="rename-button"
                                                    onClick={() => startEditingRunner(runner)}
                                                    title="Rename runner"
                                                >
                                                    ✏️
                                                </button>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => handleDeleteRunner(runner.id, runner.name)}
                                                    title="Delete runner"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Enterprise Card */}
                <div className="account-card enterprise-card">
                    <div className="card-header">
                        <div className="card-icon">🏢</div>
                        <h3>Enterprise</h3>
                    </div>
                    <div className="enterprise-info">
                        <p className="enterprise-description">
                            Need custom solutions, higher limits, or dedicated support? Our Enterprise plan offers
                            tailored features for your organization.
                        </p>
                        <a href="mailto:commit451@gmail.com"
                           className="contact-sales-button"
                           style={{
                               backgroundColor: '#6b7280',
                               borderColor: '#6b7280',
                               textDecoration: 'none'
                           }}>
                            Contact Sales
                        </a>
                    </div>
                </div>

                {/* Sign Out Card */}
                <div className="account-card signout-card">
                    <div className="card-header">
                        <div className="card-icon signout-icon">👤</div>
                        <h3>Sign Out</h3>
                    </div>
                    <div className="signout-info">
                        <p className="signout-description">
                            Sign out of your account and return to the home screen.
                        </p>
                        <button className="signout-button" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Account;