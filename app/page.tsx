'use client'

import { useState, useEffect } from 'react'

interface Topic {
  name: string
  completed: boolean
}

interface Section {
  title: string
  topics: Topic[]
  resources?: string[]
}

interface Phase {
  number: number
  title: string
  duration: string
  sections: Section[]
  tips: string[]
}

const roadmapData: Phase[] = [
  {
    number: 1,
    title: 'Fundamentals & Language Basics',
    duration: '1-2 months',
    sections: [
      {
        title: 'Programming Language',
        topics: [
          { name: 'Choose C++, Java, or Python', completed: false },
          { name: 'Syntax and basic I/O', completed: false },
          { name: 'Variables, data types, operators', completed: false },
          { name: 'Control structures (if-else, loops)', completed: false },
          { name: 'Functions and recursion basics', completed: false },
          { name: 'Arrays and strings', completed: false },
        ],
        resources: ['C++ STL Documentation', 'Python Docs', 'Java API']
      },
      {
        title: 'Time & Space Complexity',
        topics: [
          { name: 'Big O notation', completed: false },
          { name: 'Analyzing algorithm efficiency', completed: false },
          { name: 'Common complexities (O(1), O(n), O(log n), O(n²))', completed: false },
        ]
      }
    ],
    tips: [
      'Pick one language and stick with it',
      'Solve at least 50 easy problems',
      'Learn to read problem statements carefully',
      'Practice writing clean, readable code'
    ]
  },
  {
    number: 2,
    title: 'Basic Data Structures',
    duration: '2-3 months',
    sections: [
      {
        title: 'Linear Data Structures',
        topics: [
          { name: 'Arrays and dynamic arrays', completed: false },
          { name: 'Linked lists (single, double, circular)', completed: false },
          { name: 'Stacks (implementation & applications)', completed: false },
          { name: 'Queues (circular, deque, priority queue)', completed: false },
        ]
      },
      {
        title: 'Basic Algorithms',
        topics: [
          { name: 'Two pointers technique', completed: false },
          { name: 'Sliding window', completed: false },
          { name: 'Prefix sum', completed: false },
          { name: 'Basic sorting (bubble, selection, insertion)', completed: false },
          { name: 'Binary search and its variants', completed: false },
        ],
        resources: ['LeetCode Easy', 'HackerRank', 'Codeforces Div 3']
      }
    ],
    tips: [
      'Implement each data structure from scratch once',
      'Solve 100+ problems on arrays and strings',
      'Master binary search variations',
      'Learn when to use which data structure'
    ]
  },
  {
    number: 3,
    title: 'Intermediate Data Structures',
    duration: '2-3 months',
    sections: [
      {
        title: 'Trees & Graphs',
        topics: [
          { name: 'Binary trees (traversals, properties)', completed: false },
          { name: 'Binary search trees (BST)', completed: false },
          { name: 'Heaps and priority queues', completed: false },
          { name: 'Graph representations (adjacency list/matrix)', completed: false },
          { name: 'BFS and DFS', completed: false },
          { name: 'Topological sorting', completed: false },
        ]
      },
      {
        title: 'Hash-based Structures',
        topics: [
          { name: 'Hash tables/maps', completed: false },
          { name: 'Hash sets', completed: false },
          { name: 'Collision handling', completed: false },
        ]
      }
    ],
    tips: [
      'Visualize tree and graph problems',
      'Practice both iterative and recursive solutions',
      'Learn to recognize graph patterns',
      'Solve 80+ tree and graph problems'
    ]
  },
  {
    number: 4,
    title: 'Advanced Algorithms',
    duration: '3-4 months',
    sections: [
      {
        title: 'Dynamic Programming',
        topics: [
          { name: 'Memoization vs tabulation', completed: false },
          { name: '1D DP (Fibonacci, climbing stairs)', completed: false },
          { name: '2D DP (grid problems, LCS, edit distance)', completed: false },
          { name: 'Knapsack variations', completed: false },
          { name: 'DP on trees', completed: false },
          { name: 'Bitmask DP', completed: false },
        ],
        resources: ['AtCoder DP Contest', 'CSES Problem Set']
      },
      {
        title: 'Greedy Algorithms',
        topics: [
          { name: 'Activity selection', completed: false },
          { name: 'Interval scheduling', completed: false },
          { name: 'Huffman coding', completed: false },
          { name: 'Greedy vs DP decision making', completed: false },
        ]
      },
      {
        title: 'Graph Algorithms',
        topics: [
          { name: "Dijkstra's shortest path", completed: false },
          { name: 'Bellman-Ford algorithm', completed: false },
          { name: 'Floyd-Warshall', completed: false },
          { name: "Prim's and Kruskal's MST", completed: false },
          { name: 'Union-Find (Disjoint Set)', completed: false },
        ]
      }
    ],
    tips: [
      'DP is crucial - spend extra time here',
      'Solve 100+ DP problems',
      'Learn to identify DP patterns',
      'Practice both top-down and bottom-up approaches'
    ]
  },
  {
    number: 5,
    title: 'Advanced Data Structures',
    duration: '2-3 months',
    sections: [
      {
        title: 'Advanced Trees',
        topics: [
          { name: 'Segment trees', completed: false },
          { name: 'Fenwick tree (Binary Indexed Tree)', completed: false },
          { name: 'Trie (prefix tree)', completed: false },
          { name: 'AVL trees', completed: false },
          { name: 'Red-Black trees (concepts)', completed: false },
        ]
      },
      {
        title: 'String Algorithms',
        topics: [
          { name: 'KMP pattern matching', completed: false },
          { name: 'Rabin-Karp algorithm', completed: false },
          { name: 'Z-algorithm', completed: false },
          { name: 'Suffix arrays', completed: false },
        ]
      }
    ],
    tips: [
      'Segment trees are frequently used in contests',
      'Understand when to use each advanced structure',
      'Practice implementation under time pressure',
      'Learn library functions when available'
    ]
  },
  {
    number: 6,
    title: 'Expert Techniques',
    duration: '3-4 months',
    sections: [
      {
        title: 'Advanced Graph Theory',
        topics: [
          { name: 'Strongly connected components', completed: false },
          { name: 'Bridges and articulation points', completed: false },
          { name: 'Network flow (Ford-Fulkerson, Dinic)', completed: false },
          { name: 'Bipartite matching', completed: false },
        ]
      },
      {
        title: 'Mathematical Algorithms',
        topics: [
          { name: 'Number theory (GCD, LCM, primes)', completed: false },
          { name: 'Modular arithmetic', completed: false },
          { name: 'Combinatorics', completed: false },
          { name: 'Fast exponentiation', completed: false },
          { name: 'Sieve of Eratosthenes', completed: false },
        ]
      },
      {
        title: 'Advanced Techniques',
        topics: [
          { name: 'Binary lifting', completed: false },
          { name: 'Square root decomposition', completed: false },
          { name: 'Mo\'s algorithm', completed: false },
          { name: 'Convex hull trick', completed: false },
        ]
      }
    ],
    tips: [
      'These topics appear in harder problems',
      'Focus on understanding, not memorization',
      'Practice on Codeforces Div 1 and Div 2',
      'Participate in virtual contests'
    ]
  },
  {
    number: 7,
    title: 'Contest Preparation',
    duration: 'Ongoing',
    sections: [
      {
        title: 'Practice Platforms',
        topics: [
          { name: 'Codeforces (Div 2, Div 1)', completed: false },
          { name: 'LeetCode contests', completed: false },
          { name: 'AtCoder Beginner/Regular contests', completed: false },
          { name: 'CodeChef (Starters, Lunchtime)', completed: false },
          { name: 'Google Code Jam (practice rounds)', completed: false },
          { name: 'ICPC past problems', completed: false },
        ],
        resources: ['Codeforces', 'LeetCode', 'AtCoder', 'CodeChef']
      },
      {
        title: 'Contest Skills',
        topics: [
          { name: 'Time management', completed: false },
          { name: 'Problem selection strategy', completed: false },
          { name: 'Debugging quickly', completed: false },
          { name: 'Handling pressure', completed: false },
          { name: 'Reading editorials', completed: false },
          { name: 'Upsolving', completed: false },
        ]
      }
    ],
    tips: [
      'Participate in at least 2-3 contests per week',
      'Always upsolve problems you couldn\'t solve',
      'Analyze your mistakes after each contest',
      'Set rating goals and track progress',
      'Join a community or find a practice partner'
    ]
  }
]

export default function Home() {
  const [phases, setPhases] = useState<Phase[]>(roadmapData)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const savedProgress = localStorage.getItem('cp-roadmap-progress')
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress)
      setPhases(parsed)
      calculateProgress(parsed)
    }
  }, [])

  const calculateProgress = (data: Phase[]) => {
    let total = 0
    let completed = 0

    data.forEach(phase => {
      phase.sections.forEach(section => {
        section.topics.forEach(topic => {
          total++
          if (topic.completed) completed++
        })
      })
    })

    setProgress(total > 0 ? (completed / total) * 100 : 0)
  }

  const toggleTopic = (phaseIdx: number, sectionIdx: number, topicIdx: number) => {
    const newPhases = [...phases]
    newPhases[phaseIdx].sections[sectionIdx].topics[topicIdx].completed =
      !newPhases[phaseIdx].sections[sectionIdx].topics[topicIdx].completed

    setPhases(newPhases)
    localStorage.setItem('cp-roadmap-progress', JSON.stringify(newPhases))
    calculateProgress(newPhases)
  }

  return (
    <>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="container">
        <header className="header">
          <h1>🚀 Competitive Programming Roadmap</h1>
          <p>Your complete guide from beginner to expert | Progress: {progress.toFixed(1)}%</p>
        </header>

        <div className="roadmap">
          {phases.map((phase, phaseIdx) => (
            <div key={phaseIdx} className="phase">
              <div className="phase-header">
                <div className="phase-number">{phase.number}</div>
                <div className="phase-title">
                  <h2>{phase.title}</h2>
                  <div className="phase-duration">⏱️ {phase.duration}</div>
                </div>
              </div>

              <div className="phase-content">
                {phase.sections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="section">
                    <h3>{section.title}</h3>
                    <div className="topics-list">
                      {section.topics.map((topic, topicIdx) => (
                        <div
                          key={topicIdx}
                          className="topic-item"
                          onClick={() => toggleTopic(phaseIdx, sectionIdx, topicIdx)}
                        >
                          <div className={`checkbox ${topic.completed ? 'checked' : ''}`}></div>
                          <span style={{ textDecoration: topic.completed ? 'line-through' : 'none' }}>
                            {topic.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    {section.resources && (
                      <div className="resources">
                        {section.resources.map((resource, idx) => (
                          <span key={idx} className="resource-link">
                            📚 {resource}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="tips">
                  <h4>💡 Pro Tips</h4>
                  <ul>
                    {phase.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="phase" style={{ marginTop: '30px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <h2 style={{ color: 'white', marginBottom: '15px' }}>🎯 Final Tips for Success</h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Consistency is key - practice daily, even if just 1-2 problems</li>
            <li>Quality over quantity - understand solutions deeply</li>
            <li>Learn from others - read editorials and discuss with peers</li>
            <li>Track your progress - maintain a problem-solving journal</li>
            <li>Don't give up - competitive programming is a marathon, not a sprint</li>
            <li>Participate in contests regularly to build speed and accuracy</li>
            <li>Focus on weak areas but don't neglect strengths</li>
            <li>Take breaks to avoid burnout</li>
          </ul>
        </div>
      </div>
    </>
  )
}
