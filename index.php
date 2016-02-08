<?php get_header() ?>
<div id="container" class="clearfix">
	<section id="featureds" class="section container">
		<div class="row">
			<div id="content" class="col-sm-8 list">
				<?php while (have_posts()) : the_post(); ?>
					<article <?php post_class(); ?>>
						<h2 class="title nm"><a href="<?php the_permalink(); ?>"><?php the_title() ?></a></h2>
						<div class="subtitle tit-sep">Escrito el <?php the_time(get_option('date_format')); ?> en <?php the_category(', ', ''); ?></div>
						<div class="text">
							<?php the_content(); ?>
						</div>
					</article>
				<?php endwhile; ?>
				<div class="pagination container">
					<?php
					global $wp_query;

					$big = 999999999; // need an unlikely integer

					echo paginate_links( array(
						'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
						'format' => '?paged=%#%',
						'current' => max( 1, get_query_var('paged') ),
						'total' => $wp_query->max_num_pages
					) );
					?>
				</div>
			</div>
			<?php get_sidebar(); ?>
		</div>
	</section>
</div>
<?php get_footer() ?>