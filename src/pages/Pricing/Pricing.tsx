import React, {useEffect, useState} from 'react';
import './Pricing.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {db} from '../../config/firebase';
import {collection, getDocs} from 'firebase/firestore';

interface Plan {
    id: string;
    name: string;
    tagline: string;
    priceInCents: number;
    priceCurrency: string;
    messageLimit: number;
    runnerLimit: number;
}

const Pricing: React.FC = () => {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handlePlanClick = (plan: Plan) => {
        if (plan.priceInCents === 0) {
            // Free plan - go to learn more
            window.location.hash = 'learn-more';
        } else {
            // Pro plan - redirect to mobile app subscription info
            alert('To subscribe to Pro, please download our iOS or Android app where you can manage your subscription.');
        }
    };

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const plansCollection = collection(db, 'plans');
                const plansSnapshot = await getDocs(plansCollection);
                const plansData = plansSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Plan[];

                setPlans(plansData);
                setError(null);
            } catch (err) {
                console.error('Error fetching plans:', err);
                setError('Failed to load pricing plans. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    if (loading) {
        return (
            <div className="pricing">
                <Header isSubpage={true}/>
                <main className="pricing-main">
                    <div className="pricing-loading">
                        <div className="loading-spinner"></div>
                        <p>Loading pricing plans...</p>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="pricing">
                <Header isSubpage={true}/>
                <main className="pricing-main">
                    <div className="pricing-error">
                        <h2>Unable to Load Pricing</h2>
                        <p>{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="btn btn-primary"
                        >
                            Try Again
                        </button>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }

    return (
        <div className="pricing">
            <Header isSubpage={true}/>

            <main className="pricing-main">
                <section className="pricing-plans">
                    <div className="pricing-container">
                        {plans.length === 0 ? (
                            <div className="no-plans">
                                <h3>No plans available</h3>
                                <p>Please check back later for pricing options.</p>
                            </div>
                        ) : (
                            <div className="plans-grid">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className={`plan-card ${plan.id === 'pro' ? 'plan-pro' : ''}`}
                                    >
                                        <div className="plan-header">
                                            <h3 className="plan-name">{plan.name}</h3>
                                            <div className="plan-price">
                                                <span className="price-amount">
                                                    ${(plan.priceInCents / 100).toFixed(0)}
                                                </span>
                                                <span className="price-period">/mo</span>
                                            </div>
                                        </div>

                                        <div className="plan-divider"></div>

                                        <div className="plan-features">
                                            <h4 className="features-title">
                                                {plan.tagline}
                                            </h4>
                                            <ul>
                                                <li>
                                                    <span className="feature-check">✓</span>
                                                    {plan.messageLimit === -1 ? 'Unlimited messages' : `${plan.messageLimit} messages per day`}
                                                </li>
                                                <li>
                                                    <span className="feature-check">✓</span>
                                                    {plan.runnerLimit === -1 ? 'Unlimited runners' : `${plan.runnerLimit} concurrent runners`}
                                                </li>
                                                <li>
                                                    <span className="feature-check">✓</span>
                                                    AI-powered automation
                                                </li>
                                                <li>
                                                    <span className="feature-check">✓</span>
                                                    Push notifications
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="plan-action">
                                            {plan.priceInCents === 0 ? (
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => handlePlanClick(plan)}
                                                >
                                                    Get Started
                                                </button>
                                            ) : (
                                                <div className="upgrade-text">
                                                    Upgrade in the mobile app
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Pricing;