import React, {useEffect, useState} from 'react';
import './Account.css';
import {useAuth} from '../../contexts/AuthContext';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {getRunnersFromFirestore, Runner} from '../../services/userService';
import {ApiError, RunnerApiService} from '../../services/apiService';

const Account: React.FC = () => {
    const {user, logout, refreshUserData, loadUserState, isLoading} = useAuth();

    useEffect(() => {
        // Load user state when Account page mounts
        loadUserState();
    }, [loadUserState]);
    const [runners, setRunners] = useState<Runner[]>([]);
    const [isLoadingRunners, setIsLoadingRunners] = useState(true);
    const [editingRunner, setEditingRunner] = useState<string | null>(null);
    const [editingName, setEditingName] = useState('');

    useEffect(() => {
        refreshUserData().catch(console.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    ? {...runner, name: newName}
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


    // If no user after loading, redirect to auth
    if (!user && !isLoading) {
        window.location.hash = 'auth';
        return null;
    }

    // Still loading user state
    if (!user) {
        return (
            <div className="account-container">
                <Header isSubpage={true}/>
                <div className="account-content" style={{paddingTop: '6rem', textAlign: 'center'}}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        border: '3px solid #374151',
                        borderTop: '3px solid #ff6b35',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto 16px'
                    }}></div>
                    <p style={{ color: '#d1d5db' }}>Loading your account...</p>
                </div>
            </div>
        );
    }

    if (isLoadingRunners) {
        return (
            <div className="account-container">
                <Header isSubpage={true}/>
                <div className="account-content" style={{paddingTop: '6rem'}}>

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

    return (
        <div className="account-container">
            <Header isSubpage={true}/>
            <div className="account-content" style={{paddingTop: '6rem'}}>

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