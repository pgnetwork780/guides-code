const collectionsData = {
    "Boss Type": [
        {
            name: "Revenant Horror",
            image: "img/revenant-horror.png",
            subcategories: [
                ...[1,2,3,4,5].map(tier => ({
                    name: `Tier ${tier}`,
                    image: `img/tier${tier}.png`,
                    subitems: [
                        {
                            name: `Tier ${tier} - Fastest Spawn Time`,
                            image: "img/Fastest_Time.png",
                            players: Array.from({length: 10}, (_, i) => ({
                                rank: i+1, name: "Unknown", score: "N/A"
                            }))
                        },
                        {
                            name: `Tier ${tier} - Slowest Spawn Time`,
                            image: "img/Slowest_Time.png",
                            players: Array.from({length: 10}, (_, i) => ({
                                rank: i+1, name: "Unknown", score: "N/A"
                            }))
                        },
                        {
                            name: `Tier ${tier} - Fastest Kill Time`,
                            image: "img/Fastest_Time.png",
                            players: Array.from({length: 10}, (_, i) => ({
                                rank: i+1, name: "Unknown", score: "N/A"
                            }))
                        },
                        {
                            name: `Tier ${tier} - Slowest Kill Time`,
                            image: "img/Slowest_Time.png",
                            players: Array.from({length: 10}, (_, i) => ({
                                rank: i+1, name: "Unknown", score: "N/A"
                            }))
                        }
                    ]
                }))
            ]
        },
        {
            name: "Fenrir Packmaster",
            image: "img/fenrir-packmaster.png",
            subcategories: [
                ...[1,2,3,4,5].map(tier => ({
                    name: `Tier ${tier}`,
                    image: `img/tier${tier}.png`,
                    subitems: [
                        {
                            name: `Tier ${tier} - Fastest Spawn Time`,
                            image: "img/Fastest_Time.png",
                            players: Array.from({length: 10}, (_, i) => ({
                                rank: i+1, name: "Unknown", score: "N/A"
                            }))
                        },
                        {
                            name: `Tier ${tier} - Slowest Spawn Time`,
                            image: "img/Slowest_Time.png",
                            players: Array.from({length: 10}, (_, i) => ({
                                rank: i+1, name: "Unknown", score: "N/A"
                            }))
                        },
                        {
                            name: `Tier ${tier} - Fastest Kill Time`,
                            image: "img/Fastest_Time.png",
                            players: Array.from({length: 10}, (_, i) => ({
                                rank: i+1, name: "Unknown", score: "N/A"
                            }))
                        },
                        {
                            name: `Tier ${tier} - Slowest Kill Time`,
                            image: "img/Slowest_Time.png",
                            players: Array.from({length: 10}, (_, i) => ({
                                rank: i+1, name: "Unknown", score: "N/A"
                            }))
                        }
                    ]
                }))
            ]
        }
    ]
};
