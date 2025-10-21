export const blogPost3 = {
  id: 3,
  title: "Database Sharding Strategies",
  excerpt: "Horizontal scaling approaches for PostgreSQL and other relational databases.",
  date: "2024-01-05",
  readTime: 7,
  content: `
    <p>As applications grow, database performance becomes a bottleneck. Sharding is a technique to horizontally partition data across multiple database instances. This post explores different sharding strategies and their trade-offs.</p>
    
    <h2>What is Database Sharding?</h2>
    <p>Sharding involves splitting a large database into smaller, more manageable pieces called shards. Each shard contains a subset of the data and can be hosted on separate servers.</p>
    
    <h2>Sharding Strategies</h2>
    
    <h3>1. Range-Based Sharding</h3>
    <p>Data is partitioned based on ranges of a key value:</p>
    
    <ul>
      <li><strong>Pros:</strong> Simple to implement, good for time-series data</li>
      <li><strong>Cons:</strong> Can lead to uneven distribution, hot spots</li>
      <li><strong>Example:</strong> User IDs 1-1000 in shard 1, 1001-2000 in shard 2</li>
    </ul>
    
    <h3>2. Hash-Based Sharding</h3>
    <p>Data is distributed using a hash function:</p>
    
    <ul>
      <li><strong>Pros:</strong> Even distribution, no hot spots</li>
      <li><strong>Cons:</strong> Difficult to add/remove shards</li>
      <li><strong>Example:</strong> hash(user_id) % num_shards</li>
    </ul>
    
    <h3>3. Directory-Based Sharding</h3>
    <p>A lookup service determines which shard contains the data:</p>
    
    <ul>
      <li><strong>Pros:</strong> Flexible, easy to rebalance</li>
      <li><strong>Cons:</strong> Single point of failure, additional complexity</li>
      <li><strong>Example:</strong> Shard lookup table</li>
    </ul>
    
    <h2>PostgreSQL Sharding Implementation</h2>
    <p>PostgreSQL offers several approaches to sharding:</p>
    
    <h3>Manual Sharding</h3>
    <pre><code>-- Create shard tables
CREATE TABLE users_shard_1 (LIKE users);
CREATE TABLE users_shard_2 (LIKE users);

-- Application-level routing
function getShard(userId) {
    return userId % 2 === 0 ? 'shard_1' : 'shard_2';
}</code></pre>
    
    <h3>Using Citus Extension</h3>
    <p>Citus is a PostgreSQL extension that provides automatic sharding:</p>
    
    <pre><code>-- Enable Citus
CREATE EXTENSION citus;

-- Create distributed table
SELECT create_distributed_table('users', 'user_id');

-- Query across all shards
SELECT * FROM users WHERE user_id = 123;</code></pre>
    
    <h2>Challenges and Solutions</h2>
    
    <h3>Cross-Shard Queries</h3>
    <p>Queries spanning multiple shards are complex:</p>
    
    <ul>
      <li>Use application-level aggregation</li>
      <li>Implement read replicas for analytics</li>
      <li>Consider denormalization for common queries</li>
    </ul>
    
    <h3>Data Consistency</h3>
    <p>Maintaining consistency across shards:</p>
    
    <ul>
      <li>Use distributed transactions sparingly</li>
      <li>Implement eventual consistency patterns</li>
      <li>Use saga patterns for complex operations</li>
    </ul>
    
    <h3>Rebalancing</h3>
    <p>Adding or removing shards requires data migration:</p>
    
    <ul>
      <li>Plan for downtime during rebalancing</li>
      <li>Use consistent hashing for minimal data movement</li>
      <li>Implement gradual migration strategies</li>
    </ul>
    
    <h2>Best Practices</h2>
    
    <ul>
      <li>Choose sharding key carefully to avoid hot spots</li>
      <li>Design for eventual consistency</li>
      <li>Implement proper monitoring and alerting</li>
      <li>Plan for schema changes across shards</li>
      <li>Consider using managed database services</li>
    </ul>
    
    <p>Database sharding is a powerful technique for scaling applications, but it comes with significant complexity. Carefully evaluate your requirements and consider alternatives like read replicas or caching before implementing sharding.</p>
  `
};
